import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { video } from './entities/videos.entity';

@Injectable()
export class VideosService extends TypeOrmCrudService<video> {
  constructor(@InjectRepository(video) catRepo) {
    super(catRepo);
  }
}
