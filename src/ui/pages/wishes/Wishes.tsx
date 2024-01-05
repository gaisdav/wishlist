import { FC } from 'react';
import css from './styles.module.scss';
import { TWishesComponent } from './types.ts';
import { Card } from '../../components/simple';

export const Wishes: FC<TWishesComponent> = () => {
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

export default Wishes;
