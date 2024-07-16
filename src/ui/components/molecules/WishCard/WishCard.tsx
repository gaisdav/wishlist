import { FC } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card, Img, LinearProgress, Link, Typography } from 'components/atoms';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { WishCardActions } from 'components/molecules/WishCardActions';
import { faker } from '@faker-js/faker';

export const WishCard: FC<IWishCard> = ({ wish, loading, onEdit, onDelete }) => {
  const { id, title, description, author } = wish;
  const route = dynamicRoute(ERoute.USER_WISH, { wishId: id, username: author?.username });

  //TOD remove faker
  const fakeImg = faker.image.url();

  return (
    <Link to={route} underline="none">
      <Card className={cn(css.wishCard, { [css.loading]: loading })}>
        {loading ? <LinearProgress className={css.linearProgress} size="sm" /> : null}

        {fakeImg ? (
          <div className={css.imgWrapper}>
            <Img className={css.backgroundImg} alt="gift" src={fakeImg} />
            <Img className={css.img} alt="gift" src={fakeImg} />
          </div>
        ) : null}

        <div className={css.body}>
          <WishCardActions wish={wish} onEdit={onEdit} onDelete={onDelete} className={css.actions} />
          <div className={css.titleWrapper}>
            <Typography>{title} </Typography>
            <Typography level="body-sm">{description}</Typography>
          </div>
        </div>
      </Card>
    </Link>
  );
};
