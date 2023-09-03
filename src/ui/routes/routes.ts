import { lazy } from 'solid-js';

export enum ERoute {
  HOME = '/',
  PROFILE = '/profile',
}

export const routes = [
  {
    path: ERoute.HOME,
    component: lazy(() => import('../pages/wishes/Wishes')),
  },
  {
    path: ERoute.PROFILE,
    component: lazy(() => import('../pages/profile/Profile')),
  },
];
