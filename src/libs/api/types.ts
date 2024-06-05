import { AxiosError, AxiosRequestConfig } from 'axios';
import { EEndpoint } from 'common/endpoints.ts';

export type Middleware = (config: AxiosRequestConfig) => AxiosRequestConfig;
export type ErrorMiddleware = (error: AxiosError) => void;

interface RequestInit extends Omit<AxiosRequestConfig, 'url' | 'method'> {}

export interface IFetcher {
  useRequestMiddleware(middleware: Middleware): void;
  useErrorMiddleware(middleware: ErrorMiddleware): void;
  get<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  post<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  put<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  patch<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
  delete<T = unknown>(url: EEndpoint, options?: RequestInit): Promise<T>;
}
