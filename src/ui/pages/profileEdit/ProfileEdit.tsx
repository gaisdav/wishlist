import { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import css from './styles.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { IProfileEditDTO } from 'data/profile/types.ts';
import { Button, Input, Textarea } from 'components/atoms';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { ERoute } from 'routes/types.ts';

const ProfileEdit: FC<PropsWithChildren> = observer(() => {
  const { entity, editProfile } = useStore('profile');
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<IProfileEditDTO>({
    defaultValues: {
      username: entity?.username,
      email: entity?.email,
      firstName: entity?.firstName,
      lastName: entity?.lastName,
      bio: entity?.bio,
      birthdate: entity ? format(entity.birthdate, 'yyyy-MM-dd') : undefined,
    },
  });

  const handleSave = async (data: IProfileEditDTO) => {
    await editProfile(data);
  };

  const handleCancel = () => {
    reset();
    navigate(ERoute.HOME);
  };

  return (
    <form className={css['profile-edit']} onSubmit={handleSubmit(handleSave)}>
      <Controller
        rules={{ required: 'Required field' }}
        disabled={false}
        name="username"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <Input className={css.field} label="Username" error={invalid} helperText={error?.message} {...field} />
          );
        }}
      />

      <Controller
        rules={{ required: 'Required field' }}
        disabled={false}
        name="email"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return <Input className={css.field} label="Email" error={invalid} helperText={error?.message} {...field} />;
        }}
      />

      <Controller
        rules={{ required: 'Required field' }}
        disabled={false}
        name="firstName"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <Input className={css.field} label="First name" error={invalid} helperText={error?.message} {...field} />
          );
        }}
      />

      <Controller
        rules={{ required: 'Required field' }}
        disabled={false}
        name="lastName"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <Input className={css.field} label="Last name" error={invalid} helperText={error?.message} {...field} />
          );
        }}
      />

      <Controller
        rules={{ required: 'Required field' }}
        disabled={false}
        name="birthdate"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <Input
              type="date"
              className={css.field}
              label="Birthdate"
              error={invalid}
              helperText={error?.message}
              {...field}
            />
          );
        }}
      />

      <Controller
        disabled={false}
        name="bio"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return <Textarea className={css.field} label="Bio" error={invalid} helperText={error?.message} {...field} />;
        }}
      />

      <Button className={css.field} type="submit" disabled={!isDirty}>
        Save
      </Button>
      <Button className={css.field} onClick={handleCancel}>
        Cancel
      </Button>
    </form>
  );
});

export default ProfileEdit;
