import css from './styles.module.scss';
import { FC, PropsWithChildren, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { WishCard, WishCardSkeleton } from 'components/molecules';
import { UserInfo } from 'components/molecules/UserInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { ERoute } from 'routes/types.ts';

const skeletons = (
  <>
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
  </>
);

const User: FC<PropsWithChildren> = observer(() => {
  const { username } = useParams();
  const navigate = useNavigate();

  const {
    user: { loading, entity },
    profile: { entity: profile },
    wish: { loading: wishLoading, list, isLoading },
  } = useStore();

  useEffect(() => {
    if (username === profile?.username) {
      navigate(ERoute.HOME);
    }
  }, [username, profile?.username, navigate]);

  const content =
    loading || wishLoading
      ? skeletons
      : list.length === 0
        ? 'Нет желаний'
        : list.map((item) => <WishCard key={item.id} wish={item} loading={isLoading(item.id)} />);

  return (
    <>
      <div className={css.profile}>
        {entity ? <UserInfo user={entity} wishes={list.length} loading={loading} /> : 'Not found'}

        <div className={css.wishes}>{content}</div>
      </div>
    </>
  );
});

export default User;
