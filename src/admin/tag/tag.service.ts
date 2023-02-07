import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { tag } from './entities/tag.entity';

@Injectable()
export class TagService extends TypeOrmCrudService<tag> {
  constructor(@InjectRepository(tag) catRepo) {
    super(catRepo);
  }
}
