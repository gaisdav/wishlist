import { FC } from 'react';
import { Sheet, Skeleton } from '@mui/joy';
import { Card } from '../../atoms';
import css from './styles.module.scss';

export const WishCardSkeleton: FC = () => {
  return (
    <Sheet>
      <Card className={css.wishPic}>
        <Skeleton variant="overlay" />
      </Card>

      <Skeleton variant="text" />

      <Skeleton variant="text" />
    </Sheet>
  );
};
