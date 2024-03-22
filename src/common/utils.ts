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

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
export const getGoogleAuthUrl = (): string => {
  if (!CLIENT_ID || !REDIRECT_URI) {
    throw new Error('Google Client ID or Redirect URI are not provided');
  }

  return `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&flowName=GeneralOAuthFlow&scope=profile email`;
};
