import css from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';
import { WishCard } from '../../components/molecules';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

export const Profile: FC<PropsWithChildren> = observer(() => {
  const { list, loading } = useStore('wish');

  if (loading) {
    return 'Loading...';
  }

  if (list.length === 0) {
    return 'Нет желаний';
  }

  return (
    <div className={css.wishes}>
      {list.map((item) => (
        <WishCard key={item.id} title={item.title} description={item.description} imageSrc={item.imageSrc} />
      ))}
    </div>
  );
});

export default Profile;
