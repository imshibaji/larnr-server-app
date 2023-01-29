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
import { CatagoryService } from './catagory.service';
import { Catagory } from './entities/catagory.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Catagory,
  },
})
@ApiTags('Admin Category')
@Controller('admin/categories')
export class CatagoryController implements CrudController<Catagory> {
  constructor(public service: CatagoryService) {}
}
