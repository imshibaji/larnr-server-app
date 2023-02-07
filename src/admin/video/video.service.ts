import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { video } from './entities/video.entity';

@Injectable()
export class VideoService extends TypeOrmCrudService<video> {
  constructor(@InjectRepository(video) catRepo) {
    super(catRepo);
  }
}
