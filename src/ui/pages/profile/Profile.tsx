import css from './styles.module.scss';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import { ICreateWishDTO, IEditWishDTO, IWishEntity } from 'data/wish/entity';
import { AddWishModal, EditWishModal, WishCard, WishCardSkeleton } from 'components/molecules';
import { Icon, IconButton } from 'components/atoms';
import { UserInfo } from 'components/molecules/UserInfo';
import { useNavigate } from 'react-router-dom';
import { ERoute } from 'routes/types.ts';
import { dynamicRoute } from 'common/utils/utils.ts';

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
  const {
    user: { users, getUsers, usersLoading },
    profile: { entity: profile },
    wish: { list, loading, addWish, editWish, deleteWish, isLoading },
  } = useStore();
  const navigate = useNavigate();
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

  const handleUserNavigate = (username: string) => {
    const route = dynamicRoute(ERoute.USER, { username });
    navigate(route);
  };

  return (
    <>
      <div className={css.profile}>
        <input type="search" onChange={(e) => getUsers(e.target.value)} />

        <ul>
          {usersLoading
            ? 'Loading...'
            : users.map((user) => (
                <li key={user.id}>
                  <button onClick={() => handleUserNavigate(user.username)}>{user.firstName}</button>
                </li>
              ))}
        </ul>

        <UserInfo isProfile user={profile} wishes={list.length} loading={loading} />

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
