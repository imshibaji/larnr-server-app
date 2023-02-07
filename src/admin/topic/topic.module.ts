import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { topic} from './entities/topic.entity';


@Module({
  imports: [TypeOrmModule.forFeature([topic])],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
