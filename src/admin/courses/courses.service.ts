import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { course } from './entities/courses.entity';

@Injectable()
export class CoursesService extends TypeOrmCrudService<course> {
  constructor(@InjectRepository(course) catRepo) {
    super(catRepo);
  }
}
