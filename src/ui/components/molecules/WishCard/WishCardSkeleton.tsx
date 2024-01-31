import { FC } from 'react';
import { Sheet, Skeleton } from '@mui/joy';
import css from './styles.module.scss';
import { Card } from 'components/atoms';

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
