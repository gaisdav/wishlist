import css from './styles.module.scss';
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { Button } from '../../components/atoms';
import { AddWishModal, WishCard, WishCardSkeleton } from '../../components/molecules';
import { ICreateWishDTO } from '../../../data/Wish/entity';

const skeletons = (
  <>
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
    <WishCardSkeleton />
  </>
);

const Profile: FC<PropsWithChildren> = observer(() => {
  const { list, loading, addWish, deleteWish, isLoaded } = useStore('wish');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddWish = async (data: ICreateWishDTO) => {
    await addWish(data);
    handleCloseModal();
  };

  const handleDeleteWish = async (id: string) => {
    await deleteWish(id);
  };

  const content = useMemo(
    () =>
      loading
        ? skeletons
        : list.length === 0
          ? 'Нет желаний'
          : list.map((item) => (
              <WishCard
                key={item.id}
                loading={loading || isLoaded(item.id)}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                onDelete={() => handleDeleteWish(item.id)}
              />
            )),
    [list, loading, isLoaded, handleDeleteWish],
  );

  return (
    <>
      <div className={css.profile}>
        <Button disabled={loading} onClick={handleOpenModal}>
          Create
        </Button>

        <div className={css.wishes}>{content}</div>
      </div>

      <AddWishModal loading={loading} open={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddWish} />
    </>
  );
});

export default Profile;
