import css from './styles.module.scss';
import { FC, PropsWithChildren, useState } from 'react';
import { Modal, WishCard } from '../../components/molecules';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { Button } from '../../components/atoms';

export const Profile: FC<PropsWithChildren> = observer(() => {
  const { list, loading } = useStore('wish');
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  if (loading) {
    return 'Loading...';
  }

  return (
    <>
      <div className={css.profile}>
        <Button onClick={handleOpenModal}>Create</Button>

        <div className={css.wishes}>
          {list.length === 0
            ? 'Нет желаний'
            : list.map((item) => (
                <WishCard key={item.id} title={item.title} description={item.description} imageSrc={item.imageSrc} />
              ))}
        </div>
      </div>

      <Modal open={open} title="text" onClose={handleOpenModal}>
        content
      </Modal>
    </>
  );
});

export default Profile;
