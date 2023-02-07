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
import { UserchartService } from './userchart.service';
import { userchart } from './entities/userchart.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: userchart,
  },
})
@ApiTags('Userchart')
@Controller('admin/usercharts')
export class UserchartController implements CrudController<userchart> {
  constructor(public service: UserchartService) {}
}
