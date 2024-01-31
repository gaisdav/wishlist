import { IWishRepository } from 'data/wish/repository';
import { IWishService } from 'data/wish/service';
import { IWishVM } from 'data/wish/vm';

export interface IRepositories {
  wish: IWishRepository;
}

export interface IServices {
  wish: IWishService;
}

export interface IVMs {
  wish: IWishVM;
}
