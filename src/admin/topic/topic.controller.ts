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
import { TopicService } from './topic.service';
import { topic } from './entities/topic.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: topic,
  },
})
@ApiTags('Topic')
@Controller('admin/topics')
export class TopicController implements CrudController<topic> {
  constructor(public service: TopicService) {}
}
