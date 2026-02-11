import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateWaitlistDto, WaitlistResponseDto } from './waitlist.dto';

@Injectable()
export class WaitlistService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateWaitlistDto): Promise<WaitlistResponseDto> {
    const email = dto.email.toLowerCase().trim();

    // Check if email already exists
    const existing = await this.prisma.waitlist.findUnique({
      where: { email },
    });

    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const entry = await this.prisma.waitlist.create({
      data: { email },
    });

    return {
      id: entry.id,
      email: entry.email,
      createdAt: entry.createdAt,
    };
  }

  async findAll(): Promise<WaitlistResponseDto[]> {
    const entries = await this.prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return entries.map((entry) => ({
      id: entry.id,
      email: entry.email,
      createdAt: entry.createdAt,
    }));
  }

  async count(): Promise<number> {
    return this.prisma.waitlist.count();
  }
}
