import { IWishRepository } from 'data/wish/repository';
import { IWishService } from 'data/wish/service';
import { IWishVM } from 'data/wish/vm';
import { IProfileRepository, IProfileService, IProfileVM } from 'data/profile/vm';
import { IFetcher } from 'libs/api';
import { INotificationVM } from 'data/notification/vm/types.ts';
import { IUserRepository, IUserService, IUserVM } from 'data/user/types.ts';

export interface IRepositories {
  wish: IWishRepository;
  profile: IProfileRepository;
  user: IUserRepository;
}

export interface IServices {
  wish: IWishService;
  profile: IProfileService;
  user: IUserService;
}

export interface IVMs {
  wish: IWishVM;
  user: IUserVM;
  notification: INotificationVM;
  profile: IProfileVM;
}

export interface ILibs {
  fetcher: IFetcher;
}
