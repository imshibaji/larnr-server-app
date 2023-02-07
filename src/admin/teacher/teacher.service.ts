import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService extends TypeOrmCrudService<teacher> {
  constructor(@InjectRepository(teacher) catRepo) {
    super(catRepo);
  }
}
