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
import { ArticlesService } from './articles.service';
import { article } from './entities/articles.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: article,
  },
})
@ApiTags('Articles')
@Controller('admin/articles')
export class ArticlesController implements CrudController<article> {
  constructor(public service: ArticlesService) {}
}
