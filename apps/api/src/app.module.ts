import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/index.js';
import { HealthModule } from './health/health.module.js';
import { PrismaModule } from './prisma/index.js';
import { UsersModule } from './users/index.js';
import { WaitlistModule } from './waitlist/index.js';
import { BlogModule } from './blog/index.js';
import { ShowcaseModule } from './showcase/index.js';
import { FeaturesModule } from './features/index.js';
import configuration from './config/configuration.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 10 }],
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    WaitlistModule,
    BlogModule,
    ShowcaseModule,
    FeaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
