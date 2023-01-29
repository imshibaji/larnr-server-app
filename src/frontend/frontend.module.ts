import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../configs/database.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, UserModule, CategoryModule],
})
export class FrontendModule {}
