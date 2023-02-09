import { Module } from '@nestjs/common';
import { TaggableService } from './taggable.service';
import { TaggableController } from './taggable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { taggable} from './entities/taggable.entity';


@Module({
  imports: [TypeOrmModule.forFeature([taggable])],
  controllers: [TaggableController],
  providers: [TaggableService],
})
export class TaggableModule {}
