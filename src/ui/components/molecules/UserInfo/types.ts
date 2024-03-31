import { IUserEntity } from 'data/user/entity';

export interface IUserInfo {
  isProfile?: boolean;
  loading?: boolean;
  user: IUserEntity | null;
  wishes: number;
}
