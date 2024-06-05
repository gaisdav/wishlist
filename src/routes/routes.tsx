import { createBrowserRouter } from 'react-router-dom';
import { ERoute } from './types.ts';
import { AppWrapper } from 'components/organisms';
import { IVMs } from '../store';
import { ErrorPage } from 'pages/error/ErrorPage.tsx';

export const initRoutes = (store: IVMs) => {
  const { profile, wish, user } = store;
  return createBrowserRouter([
    {
      path: '/',
      Component: AppWrapper,
      ErrorBoundary: ErrorPage,
      loader: async () => {
        profile.getProfile();

        return store;
      },
      children: [
        {
          path: ERoute.HOME,
          lazy: async () => {
            const { Profile } = await import('pages/profile/Profile.tsx');
            return { Component: Profile };
          },
          loader: async () => {
            wish.getProfileList();

            return store;
          },
        },
        {
          path: ERoute.USER,
          lazy: async () => {
            const { default: User } = await import('pages/user/User.tsx');
            return { Component: User };
          },
          loader: async ({ params }) => {
            const username = params.username || '';
            user.getUser(username);
            wish.getList(username);

            return store;
          },
        },
        {
          path: ERoute.USER_WISH,
          lazy: async () => {
            const { default: Wish } = await import('pages/wish/Wish.tsx');

            return { Component: Wish };
          },
          loader: async ({ params }) => {
            if (params.wishId) {
              wish.getWish(params.wishId);
            }

            return store;
          },
        },
        {
          path: ERoute.PROFILE_EDIT,
          lazy: async () => {
            const { ProfileEdit } = await import('pages/profileEdit/ProfileEdit.tsx');
            return { Component: ProfileEdit };
          },
          loader: async () => store,
        },
        {
          path: ERoute.LOGIN,
          lazy: async () => {
            const { default: Login } = await import('pages/login/Login.tsx');

            return { Component: Login };
          },
          loader: async () => store,
        },
      ],
    },
  ]);
};
