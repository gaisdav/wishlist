import { ERoute } from 'routes/types.ts';
import { ErrorMiddleware } from './types.ts';

export const authMiddleware: ErrorMiddleware = (e) => {
  const currentUrl = new URL(window.location.href);

  if (e.response?.status !== 401) {
    return;
  }

  if (currentUrl.pathname === ERoute.LOGIN) {
    return;
  }

  window.location.href = ERoute.LOGIN;
};
