import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { gem } from './entities/gems.entity';

@Injectable()
export class GemsService extends TypeOrmCrudService<gem> {
  constructor(@InjectRepository(gem) catRepo) {
    super(catRepo);
  }
}
