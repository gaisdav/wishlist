import { IRepositories, IServices, IVMs } from './types.ts';
import { VMStore } from './viewModels.ts';
import { RepositoriesStore } from './repositories.ts';
import { ServicesStore } from './services.ts';

export class Store {
  private readonly vms: IVMs | null = null;
  private readonly services: IServices | null = null;
  private readonly repositories: IRepositories | null = null;

  constructor() {
    this.repositories = new RepositoriesStore();
    this.services = new ServicesStore(this.repositories);
    this.vms = new VMStore(this.services);
  }

  get viewModels(): IVMs {
    return this.vms as IVMs;
  }
}
