import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';

@Controller('showcase')
export class ShowcaseController {
  constructor(private readonly showcaseService: ShowcaseService) {}

  @Get('projects')
  findAll(
    @Query('category') category?: string,
    @Query('featured') featured?: string,
  ) {
    return this.showcaseService.findAll({
      category,
      featured: featured === 'true' ? true : undefined,
    });
  }

  @Get('projects/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.showcaseService.findBySlug(slug);
  }

  @Get('categories')
  getCategories() {
    return this.showcaseService.getCategories();
  }

  @Post('submit')
  submit(
    @Body() body: { name: string; description: string; category: string; url?: string; github?: string },
  ) {
    return this.showcaseService.submit(body);
  }
}
