export enum ERoute {
  HOME = '/',
  LOGIN = '/login',
  PROFILE_EDIT = '/profile/edit',
  USER = '/users/:username',
  USER_WISH = ERoute.USER + '/wishes/:wishId',
}
