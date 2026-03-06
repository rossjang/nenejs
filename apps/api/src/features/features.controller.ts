import { Controller, Get } from '@nestjs/common';
import { FeaturesService } from './features.service.js';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  findAll() {
    return this.featuresService.findAll();
  }

  @Get('comparison')
  getComparison() {
    return this.featuresService.getComparison();
  }
}
