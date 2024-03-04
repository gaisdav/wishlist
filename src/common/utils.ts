// Функция для генерации путей с динамическими параметрами
import { ERoute } from 'routes/types.ts';
import { EEndpoint } from 'common/endpoints.ts';

export const dynamicRoute = (route: ERoute, params: Record<string, string | number>): ERoute => {
  let generatedRoute = route;

  // Заменяем все параметры в пути
  for (const [param, value] of Object.entries(params)) {
    generatedRoute = generatedRoute.replace(`:${param}`, String(value)) as ERoute;
  }

  return generatedRoute;
};

export const dynamicEndpoint = (route: EEndpoint, params: Record<string, string | number>): EEndpoint => {
  let generatedRoute = route;

  // Заменяем все параметры в пути
  for (const [param, value] of Object.entries(params)) {
    generatedRoute = generatedRoute.replace(`:${param}`, String(value)) as EEndpoint;
  }

  return generatedRoute;
};
