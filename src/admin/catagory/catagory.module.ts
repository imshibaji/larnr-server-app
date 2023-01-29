import { Module } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { CatagoryController } from './catagory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catagory } from './entities/catagory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catagory])],
  controllers: [CatagoryController],
  providers: [CatagoryService],
})
export class CatagoryModule {}
