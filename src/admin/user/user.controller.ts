import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: User,
  },
})
@ApiTags('Admin Users')
@Controller('admin/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
