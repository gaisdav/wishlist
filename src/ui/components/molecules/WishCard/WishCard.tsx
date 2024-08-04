import { FC } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';
import { IWishCard } from './types.ts';
import { Card, Img, LinearProgress, Link, Typography } from 'components/atoms';
import { dynamicRoute } from 'common/utils/utils.ts';
import { ERoute } from 'routes/types.ts';
import { WishCardActions } from 'components/molecules/WishCardActions';

export const WishCard: FC<IWishCard> = ({ wish, loading, onEdit, onDelete }) => {
  const { id, title, description, author } = wish;
  const route = dynamicRoute(ERoute.USER_WISH, { wishId: id, username: author?.username });

  const fakeImg =
    'https://cdn.theatlantic.com/thumbor/me2TZMHw7D5UfmEOq3OaOM2bG3U=/0x0:4800x2700/960x540/media/img/mt/2022/12/What_Gifts_Say/original.jpg';

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
