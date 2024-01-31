import { IServices, IVMs } from './types.ts';
import { IWishVM, WishVM } from 'data/wish/vm';

export class VMStore implements IVMs {
  private vms: IVMs | null = null;

  get wish(): IWishVM {
    if (!this.vms?.wish) {
      this.vms = {
        wish: new WishVM(this.services.wish),
      };
    }

    return this.vms.wish;
  }

  constructor(private services: IServices) {}
}
