import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacher} from './entities/teacher.entity';


@Module({
  imports: [TypeOrmModule.forFeature([teacher])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
