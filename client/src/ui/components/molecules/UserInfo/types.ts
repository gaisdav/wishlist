import { IUserEntity } from 'data/user/entity';

export interface IUserInfo {
  loading?: boolean;
  user: IUserEntity | null;
  wishes: number;
}
