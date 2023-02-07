import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { gem } from './entities/gem.entity';

@Injectable()
export class GemService extends TypeOrmCrudService<gem> {
  constructor(@InjectRepository(gem) catRepo) {
    super(catRepo);
  }
}
