import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IFetcher } from './types.ts';
import { EEndpoint } from 'common/endpoints.ts';

type Middleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

type RequestInit = Omit<AxiosRequestConfig, 'url' | 'method'>;

export class Fetcher implements IFetcher {
  private axiosInstance: AxiosInstance;
  private readonly middlewares: Middleware[];

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
    this.middlewares = [];
  }

  use(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  async get<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T> {
    return this.request<T>({ ...options, method: 'get', url });
  }

  async post<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T> {
    return this.request<T>({ ...options, url, method: 'POST' });
  }

  async put<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T> {
    return this.request<T>({ ...options, url, method: 'PUT' });
  }

  async patch<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T> {
    return this.request<T>({ ...options, url, method: 'PATCH' });
  }

  async delete<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T> {
    return this.request<T>({ ...options, method: 'DELETE', url });
  }

  private async request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    let modifiedConfig = { ...config };
    for (const middleware of this.middlewares) {
      modifiedConfig = middleware(modifiedConfig);
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await this.axiosInstance.request<T>(modifiedConfig);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
