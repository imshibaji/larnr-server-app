import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './configs/database.module';
import { AdminModule } from './admin/admin.module';
import { FrontendModule } from './frontend/frontend.module';
import { Routes } from '@nestjs/core';
//import { AuthModule } from './auth/auth.module';
import { User } from './frontend/user/entities/user.entity';


@Module({
  imports: [DatabaseModule, FrontendModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
