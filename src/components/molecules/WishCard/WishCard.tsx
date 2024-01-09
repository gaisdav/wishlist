import { FC } from 'react';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card } from '../../atoms/';
import { Img } from '../../atoms/Img';
import { Sheet, Typography } from '@mui/joy';

export const WishCard: FC<IWishCard> = ({
  title,
  description,
  src = 'https://5.imimg.com/data5/HC/EV/MY-15940038/diwali-gift-box.jpg',
}) => {
  return (
    <Sheet>
      <Card className={css.wishCard}>{src ? <Img className={css.backgroundImg} alt="gift" src={src} /> : null}</Card>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Sheet>
  );
};
