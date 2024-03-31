import { IUserService, IUserEntity, IUserRepository } from '../types.ts';
import { User } from 'data/user/entity';

export class UserService implements IUserService {
  constructor(private repository: IUserRepository) {}

  async getUser(username: string): Promise<IUserEntity> {
    const wish = await this.repository.findOneById(username);

    return new User(wish);
  }
}
