import { Module } from '@nestjs/common';
import { UserchartService } from './userchart.service';
import { UserchartController } from './userchart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userchart} from './entities/userchart.entity';


@Module({
  imports: [TypeOrmModule.forFeature([userchart])],
  controllers: [],
  providers: [UserchartService],
})
export class UserchartModule {}
