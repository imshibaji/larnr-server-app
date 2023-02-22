import { CrudController } from '@nestjsx/crud/lib/interfaces/crud-controller.interface';
import { Controller } from '@nestjs/common';
import { GemService } from './gem.service';
import { gem } from './entities/gem.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: gem,
  },
})
@ApiTags('Admin Gem')
@Controller('admin/gem')
export class GemController implements CrudController<gem> {
  constructor(public service: GemService) {}
}
