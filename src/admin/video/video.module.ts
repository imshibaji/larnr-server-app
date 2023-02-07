import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { video} from './entities/video.entity';


@Module({
  imports: [TypeOrmModule.forFeature([video])],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
