import css from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';
import { WishCard } from '../../components/molecules';

export const Profile: FC<PropsWithChildren> = () => {
  return (
    <div className={css.wishes}>
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
      <WishCard title={'test'} />
    </div>
  );
};

export default Profile;
