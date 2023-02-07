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
import { UserassesmentService } from './userassesment.service';
import { userassesment } from './entities/userassesment.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: userassesment,
  },
})
@ApiTags('Userassesment')
@Controller('admin/Userassesments')
export class UserassesmentController implements CrudController<userassesment> {
  constructor(public service: UserassesmentService) {}
}
