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
import { CoursesService } from './courses.service';
import { course } from './entities/courses.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: course,
  },
})
@ApiTags('Courses')
@Controller('admin/courses')
export class CoursesController implements CrudController<course> {
  constructor(public service: CoursesService) {}
}
