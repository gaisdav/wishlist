import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import Profile from '../pages/profile/Profile.tsx';
import Wishes from '../pages/wishes/Wishes.tsx';

export const router = createBrowserRouter([
  {
    path: ERoute.HOME,
    element: <Wishes />,
  },
  {
    path: ERoute.PROFILE,
    element: <Profile />,
  },
]);
