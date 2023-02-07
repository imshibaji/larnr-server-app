import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { activity } from './entities/activity.entity';

@Injectable()
export class ActivityService extends TypeOrmCrudService<activity> {
  constructor(@InjectRepository(activity) catRepo) {
    super(catRepo);
  }
}
