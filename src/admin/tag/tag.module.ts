import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tag} from './entities/tag.entity';


@Module({
  imports: [TypeOrmModule.forFeature([tag])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
