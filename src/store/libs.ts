import { ILibs } from './types.ts';
import { Fetcher, IFetcher } from 'libs/api';

export class LibsStore implements ILibs {
  private libs: ILibs | null = null;

  get fetcher(): IFetcher {
    if (!this.libs?.fetcher) {
      this.libs = {
        // TODO use env variable for the base URL
        fetcher: new Fetcher('http://localhost:80'),
      };
    }

    return this.libs?.fetcher;
  }

  constructor() {}
}
