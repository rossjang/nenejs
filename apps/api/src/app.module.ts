import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma';
import { UsersModule } from './users';
import { WaitlistModule } from './waitlist';
import { BlogModule } from './blog';
import { ShowcaseModule } from './showcase';
import { FeaturesModule } from './features';
import configuration from './config/configuration';

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
