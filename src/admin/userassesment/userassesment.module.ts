import { Module } from '@nestjs/common';
import { UserassesmentService } from './userassesment.service';
import { UserassesmentController } from './userassesment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userassesment} from './entities/userassesment.entity';


@Module({
  imports: [TypeOrmModule.forFeature([userassesment])],
  controllers: [UserassesmentController],
  providers: [UserassesmentService],
})
export class UserassesmentModule {}
