import { Module } from '@nestjs/common';
import { GemService } from './gem.service';
import { GemController } from './gem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { gem } from './entities/gem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([gem])],
  controllers: [GemController],
  providers: [GemService],
})
export class GemModule {}
