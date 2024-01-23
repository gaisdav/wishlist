import { FC } from 'react';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card } from '../../atoms/';
import { Img } from '../../atoms/Img';
import { Sheet, Typography } from '@mui/joy';

export const WishCard: FC<IWishCard> = ({ title, description, imageSrc }) => {
  return (
    <Sheet>
      <Card className={css.wishCard}>
        {imageSrc ? <Img className={css.backgroundImg} alt="gift" src={imageSrc} /> : null}
      </Card>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Sheet>
  );
};
