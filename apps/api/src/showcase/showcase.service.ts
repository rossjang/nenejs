import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class ShowcaseService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: { category?: string; featured?: boolean }) {
    const where: Record<string, unknown> = { approved: true };
    if (query.category) {
      where.category = query.category;
    }
    if (query.featured !== undefined) {
      where.featured = query.featured;
    }

    const projects = await this.prisma.showcaseProject.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return projects.map((p) => this.formatProject(p));
  }

  async findBySlug(slug: string) {
    const project = await this.prisma.showcaseProject.findUnique({
      where: { slug },
    });

    if (!project || !project.approved) {
      throw new NotFoundException('Project not found');
    }

    return this.formatProject(project);
  }

  async getCategories() {
    const projects = await this.prisma.showcaseProject.findMany({
      where: { approved: true },
      select: { category: true },
    });

    const counts: Record<string, number> = {};
    for (const p of projects) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }

    return Object.entries(counts).map(([category, count]) => ({
      category,
      count,
    }));
  }

  async submit(data: { name: string; description: string; category: string; url?: string; github?: string }) {
    const slug = data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return this.prisma.showcaseProject.create({
      data: {
        ...data,
        slug: `${slug}-${Date.now()}`,
        approved: false,
        featured: false,
      },
    });
  }

  private formatProject(project: Record<string, unknown>) {
    return {
      ...project,
      tags: project.tags ? JSON.parse(project.tags as string) : [],
    };
  }
}
