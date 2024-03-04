import { AxiosRequestConfig } from 'axios';

type Middleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

interface RequestInit extends Omit<AxiosRequestConfig, 'url' | 'method'> {}

export interface IFetcher {
  use(middleware: Middleware): void;
  get<T = unknown>(url: string, options?: RequestInit): Promise<T>;
  post<T = unknown>(url: string, options?: RequestInit): Promise<T>;
  put<T = unknown>(url: string, options?: RequestInit): Promise<T>;
  patch<T = unknown>(url: string, options?: RequestInit): Promise<T>;
  delete<T = unknown>(url: string, options?: RequestInit): Promise<T>;
}
