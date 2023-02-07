import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { course } from './entities/course.entity';

@Injectable()
export class CourseService extends TypeOrmCrudService<course> {
  constructor(@InjectRepository(course) catRepo) {
    super(catRepo);
  }
}
