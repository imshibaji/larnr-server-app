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
import { TagService } from './tag.service';
import { tag } from './entities/tag.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: tag,
  },
})
@ApiTags('Tag')
@Controller('admin/tags')
export class TagController implements CrudController<tag> {
  constructor(public service: TagService) {}
}
