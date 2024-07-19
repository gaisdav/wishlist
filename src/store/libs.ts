import { ILibs } from './types.ts';
import { Fetcher, IFetcher } from 'libs/api';

export class LibsStore implements ILibs {
  private libs: ILibs | null = null;

  get fetcher(): IFetcher {
    if (!this.libs?.fetcher) {
      this.libs = {
        fetcher: new Fetcher(import.meta.env.VITE_BASE_URL),
      };
    }

    return this.libs?.fetcher;
  }

  constructor() {}
}
