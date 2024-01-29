export enum ERoute {
  HOME = '/',
  MY_WISH = '/wishes/:wishId',
}

// Функция для генерации пути с динамическими параметрами
export const dynamicRoute = (route: ERoute, params: Record<string, string | number>): ERoute => {
  let generatedRoute = route;

  // Заменяем все параметры в пути
  for (const [param, value] of Object.entries(params)) {
    generatedRoute = generatedRoute.replace(`:${param}`, String(value)) as ERoute;
  }

  return generatedRoute;
};
