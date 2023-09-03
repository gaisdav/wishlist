import { lazy } from 'solid-js';

export enum ERoute {
  HOME = '/',
  PROFILE = '/profile',
}

export const routes = [
  {
    path: ERoute.HOME,
    component: lazy(() => import('../pages/wishes')),
  },
  {
    path: ERoute.PROFILE,
    component: lazy(() => import('../pages/wishes')),
  },
];
