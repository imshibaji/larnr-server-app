import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { userassesment } from './entities/userassesment.entity';

@Injectable()
export class UserassesmentService extends TypeOrmCrudService<userassesment> {
  constructor(@InjectRepository(userassesment) catRepo) {
    super(catRepo);
  }
}
