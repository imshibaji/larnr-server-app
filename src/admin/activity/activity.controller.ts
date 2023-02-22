import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import { Controller } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { activity } from './entities/activity.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: activity,
  },
})
@ApiTags('Admin Activity')
@Controller('admin/activities')
export class ActivityController implements CrudController<activity> {
  constructor(public service: ActivityService) {}
}
