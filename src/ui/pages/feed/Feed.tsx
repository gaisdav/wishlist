import { FC } from 'react';
import css from './styles.module.scss';
import { TWishesComponent } from './types.ts';
import { WishCard } from '../../components/molecules';

export const Feed: FC<TWishesComponent> = () => {
  return (
    <div className={css.feed}>
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

export default Feed;
