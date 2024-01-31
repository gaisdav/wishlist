import css from './styles.module.scss';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { ICreateWishDTO, IEditWishDTO, IWishEntity } from 'data/Wish/entity';
import { AddWishModal, EditWishModal, WishCard, WishCardSkeleton } from 'components/molecules';
import { Icon, IconButton } from 'components/atoms';

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
  const { list, loading, addWish, editWish, deleteWish, isLoading } = useStore('wish');
  const [modalMode, setModalMode] = useState<'edit' | 'add' | null>(null);
  const [editableEntity, setEditEntity] = useState<IWishEntity | null>(null);

  const openCreateWishModal = () => setModalMode('add');
  const openEditWishModal = () => setModalMode('edit');
  const handleCloseModal = () => {
    setModalMode(null);
    setEditEntity(null);
  };

  const submitAddWish = async (data: ICreateWishDTO) => {
    await addWish(data);
    handleCloseModal();
  };
  const submitEditWish = async (data: IEditWishDTO) => {
    if (editableEntity) {
      handleCloseModal();
      await editWish(editableEntity.id, data);
    }
  };

  const handleDeleteWish = useCallback(
    async (id: string) => {
      await deleteWish(id);
    },
    [deleteWish],
  );
  const handleEditWish = useCallback(
    async (id: string) => {
      const wish = list.find((item) => item.id === id);
      setEditEntity(wish || null);
      openEditWishModal();
    },
    [list],
  );

  const content = loading
    ? skeletons
    : list.length === 0
      ? 'Нет желаний'
      : list.map((item) => (
          <WishCard
            key={item.id}
            wish={item}
            loading={isLoading(item.id)}
            onDelete={handleDeleteWish}
            onEdit={handleEditWish}
          />
        ));

  return (
    <>
      <div className={css.profile}>
        <IconButton disabled={loading} onClick={openCreateWishModal}>
          <Icon iconName="add" />
        </IconButton>

        <div className={css.wishes}>{content}</div>
      </div>

      <AddWishModal loading={loading} open={modalMode === 'add'} onClose={handleCloseModal} onSubmit={submitAddWish} />

      <EditWishModal
        wish={editableEntity}
        loading={loading}
        open={modalMode === 'edit'}
        onClose={handleCloseModal}
        onSubmit={submitEditWish}
      />
    </>
  );
});

export default Profile;
