import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { parsePagination, createPaginatedResponse } from '@nene/shared';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllPosts(query: { category?: string; page?: number; limit?: number }) {
    const { page, limit, skip } = parsePagination(query.page, query.limit);

    const where: Record<string, unknown> = { published: true };
    if (query.category) {
      where.category = query.category;
    }

    const [posts, total] = await Promise.all([
      this.prisma.blogPost.findMany({
        where,
        include: { author: true },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.blogPost.count({ where }),
    ]);

    const items = posts.map((post) => this.formatPost(post));
    return createPaginatedResponse(items, total, page, limit);
  }

  async findBySlug(slug: string) {
    const post = await this.prisma.blogPost.findUnique({
      where: { slug },
      include: { author: true },
    });

    if (!post || !post.published) {
      throw new NotFoundException('Post not found');
    }

    return this.formatPost(post);
  }

  async findAllAuthors() {
    return this.prisma.author.findMany({
      orderBy: { name: 'asc' },
    });
  }

  private formatPost(post: Record<string, unknown> & { author: Record<string, unknown> }) {
    return {
      ...post,
      tags: post.tags ? JSON.parse(post.tags as string) : [],
      publishedAt: post.publishedAt ? (post.publishedAt as Date).toISOString() : null,
      createdAt: (post.createdAt as Date).toISOString(),
      updatedAt: (post.updatedAt as Date).toISOString(),
    };
  }
}
