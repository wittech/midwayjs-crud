import { Inject } from '@midwayjs/decorator';
import { CrudController } from '../../../core/base_controller';
import { Crud } from '../../../decorator/crud';
import { User } from '../model/user';
import { UserService } from '../service/user';

@Crud('/user', { description: '用户管理' }, {})
export class UserController extends CrudController<User> {
  @Inject()
  protected service: UserService;
}
