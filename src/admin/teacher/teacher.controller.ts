import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import { Controller } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { teacher } from './entities/teacher.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: teacher,
  },
})
@ApiTags('Teacher')
@Controller('admin/teachers')
export class TeacherController implements CrudController<teacher> {
  constructor(public service: TeacherService) {}
}
