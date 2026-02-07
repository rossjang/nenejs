import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './waitlist.dto';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateWaitlistDto) {
    const entry = await this.waitlistService.create(dto);
    return {
      success: true,
      message: 'Successfully joined the waitlist',
      data: entry,
    };
  }

  @Get('count')
  async getCount() {
    const count = await this.waitlistService.count();
    return {
      success: true,
      data: { count },
    };
  }
}
