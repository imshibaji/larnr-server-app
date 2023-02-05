import { Module } from '@nestjs/common';
import { CatagoryModule } from './catagory/catagory.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../configs/database.module';
import { GemModule } from './gems/gems';
import { article } from './articles/entities/articles.entity';
import { ArticlesModule } from './articles/articles';
import { CoursesModule } from './courses/courses';
import { VideosModule } from './videos/videos';

@Module({
  imports: [DatabaseModule, CatagoryModule, GemModule, ArticlesModule,CoursesModule,VideosModule],
})
export class AdminModule {}