import { Module } from '@nestjs/common';
import { GemsService } from './gems.service';
import { GemsController } from './gems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { gem } from './entities/gems.entity';


@Module({
  imports: [TypeOrmModule.forFeature([gem])],
  controllers: [GemsController],
  providers: [GemsService],
})
export class GemModule {}
