import { FC } from 'react';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card, Img, Typography } from '../../atoms/';
import { Box } from '@mui/joy';
import { WishCardSkeleton } from './WishCardSkeleton.tsx';

export const WishCard: FC<IWishCard> = ({ title, description, imageSrc, loading }) => {
  if (loading) return <WishCardSkeleton />;

  return (
    <Box className={css.wishCard}>
      {imageSrc ? (
        <Card className={css.wishPic}>
          <Img className={css.backgroundImg} alt="gift" src={imageSrc} />
        </Card>
      ) : null}

      <Typography>{title}</Typography>

      <Typography style={{ marginTop: 4 }}>{description}</Typography>
    </Box>
  );
};
