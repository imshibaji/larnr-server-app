import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import { Controller } from '@nestjs/common';
import { CourseService } from './course.service';
import { course } from './entities/course.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: course,
  },
})
@ApiTags('Admin Course')
@Controller('admin/course')
export class CourseController implements CrudController<course> {
  constructor(public service: CourseService) {}
}
