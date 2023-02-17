import { Module } from '@nestjs/common';
import { CatagoryModule } from './catagory/catagory.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../configs/database.module';
import { GemModule } from './gem/gem.module';
import { ArticleModule } from './article/article.module';
import { CourseModule } from './course/course.module';
import { VideoModule } from './video/video.module';
import { ActivityModule } from './activity/activity.module';
import { ActivitychartModule } from './activitychart/activitychart.module';
import { UserchartModule } from './userchart/userchart.module';
import { UserassesmentModule } from './userassesment/userassesment.module';
import { TopicassignmentModule } from './topicassignment/topicassignment.module';
import { TopicModule } from './topic/topic.module';
import { TeacherModule } from './teacher/teacher.module';
import { TagModule } from './tag/tag.module';
import { TaggableModule } from './taggable/taggable.module';


@Module({
  imports: [
    DatabaseModule,
    CatagoryModule,
    GemModule,
    ArticleModule,
    CourseModule,
    VideoModule,
    UserModule,
    ActivityModule,
    ActivitychartModule,
    UserchartModule,
    UserassesmentModule,
    TopicassignmentModule,
    TopicModule,
    TeacherModule,
    TagModule,
    TaggableModule
  ],
})
export class AdminModule {}
