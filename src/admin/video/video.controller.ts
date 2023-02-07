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
import { VideoService } from './video.service';
import { video } from './entities/video.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: video,
  },
})
@ApiTags('Video')
@Controller('admin/videos')
export class VideoController implements CrudController<video> {
  constructor(public service: VideoService) {}
}
