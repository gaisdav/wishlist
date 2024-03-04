import { AxiosRequestConfig } from 'axios';
import { EEndpoint } from 'common/endpoints.ts';

type Middleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

interface RequestInit extends Omit<AxiosRequestConfig, 'url' | 'method'> {}

export interface IFetcher {
  use(middleware: Middleware): void;
  get<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  post<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  put<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  patch<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  delete<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
}
