import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { article } from './entities/articles.entity';

@Injectable()
export class ArticlesService extends TypeOrmCrudService<article> {
  constructor(@InjectRepository(article) catRepo) {
    super(catRepo);
  }
}
