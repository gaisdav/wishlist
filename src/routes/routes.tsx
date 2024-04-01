import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from 'components/organisms';
import Profile from '../ui/pages/profile/Profile.tsx';
import { IVMs } from '../store';
import { ErrorPage } from 'pages/error/ErrorPage.tsx';
import ProfileEdit from 'pages/profileEdit/ProfileEdit.tsx';
import Login from 'pages/login/Login.tsx';
import Wish from 'pages/wish/Wish.tsx';
import User from 'pages/user/User.tsx';

export const initRoutes = (store: IVMs) => {
  const { profile, wish, user } = store;
  return createBrowserRouter([
    {
      path: '/',
      Component: AppWrapper,
      errorElement: <ErrorPage />,
      ErrorBoundary: ErrorPage,
      loader: async () => {
        profile.getProfile();

        return store;
      },
      children: [
        {
          path: ERoute.HOME,
          element: <Profile />,
          loader: async () => {
            wish.getProfileList();

            return store;
          },
          children: [
            {
              path: ERoute.MY_WISH,
              element: <Wish />,
              loader: async ({ params }) => {
                if (params.wishId) {
                  wish.getWish(params.wishId);
                }

                return store;
              },
            },
          ],
        },
        {
          path: ERoute.USER,
          element: <User />,
          loader: async ({ params }) => {
            const username = params.username || '';
            user.getUser(username);
            wish.getList(username);

            return store;
          },
        },
        {
          path: ERoute.PROFILE_EDIT,
          element: <ProfileEdit />,
          loader: async () => store,
        },
        {
          path: ERoute.LOGIN,
          element: <Login />,
          loader: async () => store,
        },
      ],
    },
  ]);
};
