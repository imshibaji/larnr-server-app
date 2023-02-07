import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { article } from './entities/article.entity';

@Injectable()
export class ArticleService extends TypeOrmCrudService<article> {
  constructor(@InjectRepository(article) catRepo) {
    super(catRepo);
  }
}
