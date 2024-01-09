import css from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';

export const Profile: FC<PropsWithChildren> = () => {
  return <div className={css.profile}>profile</div>;
};

export default Profile;
