import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { activitychart } from './entities/activitychart.entity';

@Injectable()
export class ActivitychartService extends TypeOrmCrudService<activitychart> {
  constructor(@InjectRepository(activitychart) catRepo) {
    super(catRepo);
  }
}
