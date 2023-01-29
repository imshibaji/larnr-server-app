import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Catagory } from './entities/catagory.entity';

@Injectable()
export class CatagoryService extends TypeOrmCrudService<Catagory> {
  constructor(@InjectRepository(Catagory) catRepo) {
    super(catRepo);
  }
}
