import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from '../components/organisms';
import Profile from '../pages/profile/Profile.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: AppWrapper,
    children: [
      {
        path: ERoute.HOME,
        element: <Profile />,
      },
    ],
  },
]);
