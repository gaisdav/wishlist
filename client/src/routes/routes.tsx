import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from 'components/organisms';
import Profile from '../ui/pages/profile/Profile.tsx';
import { IVMs } from '../store';
import Wish from '../ui/pages/wish/Wish.tsx';
import { ErrorPage } from 'pages/error/ErrorPage.tsx';

export const initRoutes = ({ wish }: IVMs) => {
  return createBrowserRouter([
    {
      path: '/',
      Component: AppWrapper,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ERoute.HOME,
          element: <Profile />,
          loader: async () => {
            wish.getList();

            return wish.list;
          },
          children: [
            {
              path: ERoute.MY_WISH,
              element: <Wish />,
              loader: async ({ params }) => {
                if (params.wishId) {
                  wish.getWish(params.wishId);
                }

                return wish.entity;
              },
            },
          ],
        },
      ],
    },
  ]);
};
