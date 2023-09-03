import css from './styles.module.scss';
import { TProfileComponent } from './types.ts';

export const Profile: TProfileComponent = () => {
  return <div class={css.profile}>profile</div>;
};

export default Profile;
