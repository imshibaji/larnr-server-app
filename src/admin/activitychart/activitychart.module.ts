import { Module } from '@nestjs/common';
import { ActivitychartService } from './activitychart.service';
import { ActivitychartController } from './activitychart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activitychart} from './entities/activitychart.entity';


@Module({
  imports: [TypeOrmModule.forFeature([activitychart])],
  controllers: [ActivitychartController],
  providers: [ActivitychartService],
})
export class ActivitychartModule {}
