import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { video} from './entities/videos.entity';


@Module({
  imports: [TypeOrmModule.forFeature([video])],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
