import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, createHash } from 'crypto';
import * as bcrypt from 'bcryptjs';
import type { AuthResponse, User } from '@nene/shared';
import { PrismaService } from '../prisma';
import type { CreateUserDto, LoginDto } from '@nene/shared';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: CreateUserDto): Promise<AuthResponse> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const created = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
      },
    });

    const { password: _, ...user } = created;
    return this.issueTokenPair(user as User);
  }

  async login(dto: LoginDto): Promise<AuthResponse> {
    const found = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!found) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const valid = await bcrypt.compare(dto.password, found.password!);

    if (!valid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: _, ...user } = found;
    return this.issueTokenPair(user as User);
  }

  async refresh(rawRefreshToken: string): Promise<AuthResponse> {
    const hashedToken = this.hashToken(rawRefreshToken);

    const stored = await this.prisma.refreshToken.findUnique({
      where: { token: hashedToken },
      include: { user: true },
    });

    if (!stored) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Theft detection: reuse of a revoked token revokes ALL user tokens
    if (stored.revoked) {
      await this.revokeAllUserTokens(stored.userId);
      throw new UnauthorizedException('Refresh token reuse detected — all sessions revoked');
    }

    if (stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token expired');
    }

    // Revoke old refresh token (rotation)
    await this.prisma.refreshToken.update({
      where: { id: stored.id },
      data: { revoked: true },
    });

    const { password: _, ...user } = stored.user;
    return this.issueTokenPair(user as User);
  }

  async logout(rawRefreshToken?: string): Promise<void> {
    if (rawRefreshToken) {
      const hashedToken = this.hashToken(rawRefreshToken);
      await this.prisma.refreshToken.updateMany({
        where: { token: hashedToken, revoked: false },
        data: { revoked: true },
      });
    }
  }

  async getMe(userId: string): Promise<User> {
    const found = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!found) {
      throw new UnauthorizedException();
    }

    const { password: _, ...user } = found;
    return user as User;
  }

  private async issueTokenPair(user: User): Promise<AuthResponse> {
    const accessToken = this.generateAccessToken(user);
    const refreshToken = await this.generateRefreshToken(user.id);
    return { user, accessToken, refreshToken };
  }

  private generateAccessToken(user: User): string {
    return this.jwt.sign({ sub: user.id, email: user.email });
  }

  private async generateRefreshToken(userId: string): Promise<string> {
    const raw = randomBytes(32).toString('hex');
    const hashed = this.hashToken(raw);
    const expiresInDays = this.config.get<number>('refreshToken.expiresInDays', 30);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiresInDays);

    await this.prisma.refreshToken.create({
      data: {
        token: hashed,
        userId,
        expiresAt,
      },
    });

    return raw;
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private async revokeAllUserTokens(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revoked: false },
      data: { revoked: true },
    });
  }
}
