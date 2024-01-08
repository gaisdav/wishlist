import { FC } from 'react';
import css from './styles.module.scss';
import { TWishesComponent } from './types.ts';
import { Card } from '../../components/atoms';

export const Feed: FC<TWishesComponent> = () => {
  return (
    <div className={css.wishes}>
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
      <Card className={css.wish} />
    </div>
  );
};

export default Feed;
