import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { userchart } from './entities/userchart.entity';

@Injectable()
export class UserchartService extends TypeOrmCrudService<userchart> {
  constructor(@InjectRepository(userchart) catRepo) {
    super(catRepo);
  }
}
