import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

import { ERoute } from './types.ts';

export const routes: RouteDefinition[] = [
  {
    path: ERoute.HOME,
    component: lazy(() => import('../pages/wishes/Wishes')),
  },
  {
    path: ERoute.PROFILE,
    component: lazy(() => import('../pages/profile/Profile')),
  },
];
