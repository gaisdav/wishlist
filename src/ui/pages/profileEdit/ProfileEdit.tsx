import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

const ProfileEdit: FC<PropsWithChildren> = observer(() => {
  const profileVM = useStore('profile');
  console.log(profileVM.entity);
  return <div>{profileVM.entity?.email}</div>;
});

export default ProfileEdit;
