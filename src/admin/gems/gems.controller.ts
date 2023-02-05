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
import { GemsService } from './gems.service';
import { gem } from './entities/gems.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: gem,
  },
})
@ApiTags('Admin Gems')
@Controller('admin/gems')
export class GemsController implements CrudController<gem> {
  constructor(public service: GemsService) {}
}
