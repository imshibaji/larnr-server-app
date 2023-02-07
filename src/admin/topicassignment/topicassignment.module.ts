import { Module } from '@nestjs/common';
import { TopicassignmentService } from './topicassignment.service';
import { TopicassignmentController } from './topicsassignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { topicassignment} from './entities/topicassignment.entity';


@Module({
  imports: [TypeOrmModule.forFeature([topicassignment])],
  controllers: [TopicassignmentController],
  providers: [TopicassignmentService],
})
export class TopicassignmentModule {}
