import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/access.decorator';

@Public()
@Crud({
  model: {
    type: User,
  },
})
@ApiTags('User')
@Controller('admin/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
