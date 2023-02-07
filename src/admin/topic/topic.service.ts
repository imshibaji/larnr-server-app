import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { topic } from './entities/topic.entity';

@Injectable()
export class TopicService extends TypeOrmCrudService<topic> {
  constructor(@InjectRepository(topic) catRepo) {
    super(catRepo);
  }
}
