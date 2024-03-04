import { IWishRepository } from 'data/wish/repository';
import { IWishService } from 'data/wish/service';
import { IWishVM } from 'data/wish/vm';
import { IProfileVM } from 'data/profile/vm';
import { IFetcher } from 'libs/api';

export interface IRepositories {
  wish: IWishRepository;
}

export interface IServices {
  wish: IWishService;
}

export interface IVMs {
  wish: IWishVM;
  profile: IProfileVM;
}

export interface ILibs {
  fetcher: IFetcher;
}
