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
import { ActivitychartService } from './activitychart.service';
import {  activitychart } from './entities/activitychart.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: activitychart,
  },
})
@ApiTags('Activitychart')
@Controller('admin/activitycharts')
export class ActivitychartController implements CrudController<activitychart> {
  constructor(public service: ActivitychartService) {}
}
