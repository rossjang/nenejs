import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class FeaturesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const features = await this.prisma.feature.findMany({
      orderBy: { order: 'asc' },
    });

    return features.map((f) => ({
      ...f,
      bullets: JSON.parse(f.bullets),
    }));
  }

  async getComparison() {
    return this.prisma.comparisonRow.findMany({
      orderBy: { order: 'asc' },
    });
  }
}
