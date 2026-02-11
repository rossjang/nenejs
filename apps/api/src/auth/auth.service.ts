import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import type { AuthResponse, User } from '@nene/shared';
import { PrismaService } from '../prisma';
import type { CreateUserDto, LoginDto } from '@nene/shared';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
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
    const accessToken = this.generateToken(user as User);

    return { user: user as User, accessToken };
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
    const accessToken = this.generateToken(user as User);

    return { user: user as User, accessToken };
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

  private generateToken(user: User): string {
    return this.jwt.sign({ sub: user.id, email: user.email });
  }
}
