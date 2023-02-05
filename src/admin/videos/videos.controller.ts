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
import { VideosService } from './videos.service';
import { video } from './entities/videos.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: video,
  },
})
@ApiTags('Videos')
@Controller('admin/videos')
export class VideosController implements CrudController<video> {
  constructor(public service: VideosService) {}
}
