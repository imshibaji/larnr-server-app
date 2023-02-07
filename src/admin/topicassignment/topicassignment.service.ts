import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { topicassignment } from './entities/topicassignment.entity';

@Injectable()
export class TopicassignmentService extends TypeOrmCrudService<topicassignment> {
  constructor(@InjectRepository(topicassignment) catRepo) {
    super(catRepo);
  }
}
