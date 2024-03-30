import { FC, PropsWithChildren, useEffect } from 'react';
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
  const { entity, editProfile, loading } = useStore('profile');
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<IProfileEditDTO>({
    defaultValues: {},
  });

  useEffect(() => {
    reset({
      username: entity?.username,
      email: entity?.email,
      firstName: entity?.firstName,
      lastName: entity?.lastName,
      bio: entity?.bio,
      birthdate: entity?.birthdate ? format(entity.birthdate, 'yyyy-MM-dd') : undefined,
    });
  }, [entity, loading, reset]);

  const handleSave = async (data: IProfileEditDTO) => {
    await editProfile(data);

    navigate(ERoute.HOME);
  };

  const handleCancel = () => {
    reset();
    navigate(ERoute.HOME);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form className={css['profile-edit']} onSubmit={handleSubmit(handleSave)}>
      <Controller
        rules={{ required: 'Required field' }}
        disabled={loading}
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
        disabled={loading}
        name="email"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return <Input className={css.field} label="Email" error={invalid} helperText={error?.message} {...field} />;
        }}
      />

      <Controller
        rules={{ required: 'Required field' }}
        disabled={loading}
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
        disabled={loading}
        name="lastName"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <Input className={css.field} label="Last name" error={invalid} helperText={error?.message} {...field} />
          );
        }}
      />

      <Controller
        disabled={loading}
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
        disabled={loading}
        name="bio"
        control={control}
        render={({ field, fieldState: { invalid, error } }) => {
          return <Textarea className={css.field} label="Bio" error={invalid} helperText={error?.message} {...field} />;
        }}
      />

      <Button className={css.field} type="submit" disabled={!isDirty || loading}>
        Save
      </Button>

      <Button className={css.field} onClick={handleCancel} disabled={loading}>
        Cancel
      </Button>
    </form>
  );
});

export default ProfileEdit;
