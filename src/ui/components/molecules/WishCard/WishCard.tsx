import { FC } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card, Img, LinearProgress, Link, Typography } from 'components/atoms';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { WishActions } from 'components/molecules/WishActions';

export const WishCard: FC<IWishCard> = ({ wish, loading, onEdit, onDelete }) => {
  const { id, title, description, imageSrc, author } = wish;
  const route = dynamicRoute(ERoute.USER_WISH, { wishId: id, username: author?.username });

  return (
    <Link to={route} underline="none">
      <Card className={cn(css.wishCard, { [css.loading]: loading })}>
        {loading ? <LinearProgress className={css.linearProgress} size="sm" /> : null}

        {imageSrc ? <Img className={css.backgroundImg} alt="gift" src={imageSrc} /> : null}

        <div className={css.titleWrapper}>
          <Typography>{title} </Typography>
          <WishActions wish={wish} onEdit={onEdit} onDelete={onDelete} />
        </div>

        <Typography>{description}</Typography>
      </Card>
    </Link>
  );
};
