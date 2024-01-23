import { IRepositories, IServices, IVMs } from './types.ts';
import { VMStore } from './viewModels.ts';
import { RepositoriesStore } from './repositories.ts';
import { ServicesStore } from './services.ts';

export class Store {
  private vms: IVMs | null = null;
  private services: IServices | null = null;
  private repositories: IRepositories | null = null;

  get viewModels(): IVMs {
    if (!this.vms) {
      this.init();
    }

    return this.vms as IVMs;
  }

  init() {
    this.repositories = new RepositoriesStore();
    this.services = new ServicesStore(this.repositories);
    this.vms = new VMStore(this.services);
  }
}
