import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { article } from './entities/article.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: article,
  },
})
@ApiTags('Article')
@Controller('admin/articles')
export class ArticleController implements CrudController<article> {
  constructor(public service: ArticleService) {}
}
