import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import Profile from '../pages/profile/Profile.tsx';
import Feed from '../pages/feed/Feed.tsx';

export const router = createBrowserRouter([
  {
    path: ERoute.HOME,
    element: <Feed />,
  },
  {
    path: ERoute.PROFILE,
    element: <Profile />,
  },
]);
