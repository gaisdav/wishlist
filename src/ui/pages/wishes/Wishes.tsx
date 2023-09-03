import css from './styles.module.scss';
import { TWishesComponent } from './types.ts';
import { Card } from '../../components/simple';

export const Wishes: TWishesComponent = () => {
  return (
    <div class={css.wishes}>
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
      <Card class={css.wish} />
    </div>
  );
};

export default Wishes;
