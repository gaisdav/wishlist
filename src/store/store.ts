import { ILibs, IRepositories, IServices, IVMs } from './types.ts';
import { VMStore } from './viewModels.ts';
import { RepositoriesStore } from './repositories.ts';
import { ServicesStore } from './services.ts';
import { LibsStore } from 'store/libs.ts';

export class Store {
  private readonly libs: ILibs;
  private readonly vms: IVMs;
  private readonly services: IServices;
  private readonly repositories: IRepositories;

  constructor() {
    this.libs = new LibsStore();

    this.repositories = new RepositoriesStore(this.libs.fetcher);
    this.services = new ServicesStore(this.repositories);
    this.vms = new VMStore(this.services);
  }

  get viewModels(): IVMs {
    return this.vms;
  }
}
