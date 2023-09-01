import { TWishesComponent } from './types.ts';
import { Card } from '../../components/Card';
import css from './styles.module.scss';

export const Wishes: TWishesComponent = () => {
  return (
    <div class={css.wishes}>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
      <Card className={css.wish}></Card>
    </div>
  );
};

export default Wishes;
