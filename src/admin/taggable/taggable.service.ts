import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { taggable } from './entities/taggable.entity';

@Injectable()
export class TaggableService extends TypeOrmCrudService<taggable> {
  constructor(@InjectRepository(taggable) catRepo) {
    super(catRepo);
  }
}
