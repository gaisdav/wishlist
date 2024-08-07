import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ErrorMiddleware, IFetcher, Middleware } from './types.ts';
import { EEndpoint } from 'common/endpoints.ts';
import { authMiddleware } from 'libs/api/middleware.ts';

type RequestInit = Omit<AxiosRequestConfig, 'url' | 'method'>;

export class Fetcher implements IFetcher {
  private axiosInstance: AxiosInstance;
  private readonly middlewares: Middleware[];
  private readonly errorMiddlewares: ErrorMiddleware[];

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        //   'Content-Type': 'application/json',
        //   // 'Access-Control-Allow-Credentials': 'true',
      },
    });

    this.middlewares = [];
    this.errorMiddlewares = [authMiddleware];
  }

  useRequestMiddleware(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  useErrorMiddleware(middleware: ErrorMiddleware) {
    this.errorMiddlewares.push(middleware);
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
      const { data } = await this.axiosInstance.request<T>({ ...modifiedConfig });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        for (const middleware of this.errorMiddlewares) {
          middleware(error);
        }
      }
      throw error;
    }
  }
}
