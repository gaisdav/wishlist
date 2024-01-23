import { IWishRepository } from '../data/Wish/repository';
import { IWishService } from '../data/Wish/service';
import { IWishVM } from '../data/Wish/vm';

export interface IRepositories {
  wish: IWishRepository;
}

export interface IServices {
  wish: IWishService;
}

export interface IVMs {
  wish: IWishVM;
}
