import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from '../ui/components/organisms';
import Profile from '../ui/pages/profile/Profile.tsx';
import { IVMs } from '../store';

export const initRoutes = ({ wish }: IVMs) => {
  return createBrowserRouter([
    {
      path: '/',
      Component: AppWrapper,
      children: [
        {
          path: ERoute.HOME,
          element: <Profile />,
          loader: async () => {
            wish.getList();

            return wish.list;
          },
        },
        {
          path: ERoute.PROFILE,
          element: <Profile />,
        },
      ],
    },
  ]);
};
