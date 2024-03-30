import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from 'components/organisms';
import Profile from '../ui/pages/profile/Profile.tsx';
import { IVMs } from '../store';
import { ErrorPage } from 'pages/error/ErrorPage.tsx';
import ProfileEdit from 'pages/profileEdit/ProfileEdit.tsx';
import Login from 'pages/login/Login.tsx';
import Wish from 'pages/wish/Wish.tsx';

export const initRoutes = (store: IVMs) => {
  return createBrowserRouter([
    {
      path: '/',
      Component: AppWrapper,
      errorElement: <ErrorPage />,
      ErrorBoundary: ErrorPage,
      loader: async () => {
        store.profile.getProfile();

        return store.profile.entity;
      },
      children: [
        {
          path: ERoute.HOME,
          element: <Profile />,
          loader: async () => {
            store.wish.getList();

            return store.wish.list;
          },
          children: [
            {
              path: ERoute.MY_WISH,
              element: <Wish />,
              loader: async ({ params }) => {
                if (params.wishId) {
                  store.wish.getWish(params.wishId);
                }

                return store.wish.entity;
              },
            },
          ],
        },
        {
          path: ERoute.PROFILE_EDIT,
          element: <ProfileEdit />,
        },
        {
          path: ERoute.LOGIN,
          element: <Login />,
        },
      ],
    },
  ]);
};
