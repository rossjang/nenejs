import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from '@nene/shared';
import type { User } from '@nene/shared';
import { JwtAuthGuard, CurrentUser } from '../auth';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<{ items: User[]; total: number; page: number; limit: number; totalPages: number }> {
    const clampedLimit = Math.min(limit, 100);
    const result = await this.users.findAll(page, clampedLimit);
    return {
      ...result,
      page,
      limit: clampedLimit,
      totalPages: Math.ceil(result.total / clampedLimit),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.users.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @CurrentUser() currentUser: User,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    return this.users.update(id, currentUser.id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id') id: string,
    @CurrentUser() currentUser: User,
  ): Promise<void> {
    return this.users.remove(id, currentUser.id);
  }
}
