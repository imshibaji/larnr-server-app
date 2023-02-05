import { Module } from '@nestjs/common';
import { CatagoryModule } from './catagory/catagory.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../configs/database.module';

@Module({
  imports: [DatabaseModule, CatagoryModule, GemModule, ArticlesModule,CoursesModule,VideosModule],
})
export class AdminModule {}