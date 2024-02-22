import { IProfileEntity } from 'data/profile/entity';

export interface IProfileVM {
  loading: boolean;
  entity: IProfileEntity | null;
}
