import { FC } from 'react';
import css from './styles.module.scss';
import { TWishesComponent } from './types.ts';

export const Feed: FC<TWishesComponent> = () => {
  return <div className={css.feed}>list</div>;
};

export default Feed;
