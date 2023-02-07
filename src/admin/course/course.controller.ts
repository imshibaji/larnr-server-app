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
import { CourseService } from './course.service';
import { course } from './entities/course.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: course,
  },
})
@ApiTags('Course')
@Controller('admin/course')
export class CourseController implements CrudController<course> {
  constructor(public service: CourseService) {}
}
