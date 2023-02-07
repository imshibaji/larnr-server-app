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
import { TopicassignmentService } from './topicassignment.service';
import {  topicassignment } from './entities/topicassignment.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: topicassignment,
  },
})
@ApiTags('Topicassignment')
@Controller('admin/topicassignments')
export class TopicassignmentController implements CrudController<topicassignment> {
  constructor(public service: TopicassignmentService) {}
}
