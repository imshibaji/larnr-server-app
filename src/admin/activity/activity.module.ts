import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activity} from './entities/activity.entity';


@Module({
  imports: [TypeOrmModule.forFeature([activity])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
