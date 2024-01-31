import { FC } from 'react';
import { IWishModal } from './types.ts';
import { Modal } from '../Modal';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { ICreateWishDTO, IEditWishDTO } from 'data/wish/entity';
import { Button, Input, Textarea } from 'components/atoms';

export const WishModal: FC<IWishModal> = ({ mode, loading = false, open = false, onClose, onSubmit }) => {
  const { control, handleSubmit, reset } = useFormContext<ICreateWishDTO | IEditWishDTO>();

  const handleCLose = () => {
    if (onClose) {
      onClose();
      reset();
    }
  };

  const submit: SubmitHandler<ICreateWishDTO | IEditWishDTO> = async (data) => {
    await onSubmit(data);
    handleCLose();
  };

  const title = mode === 'add' ? 'Create wish' : 'Edit wish';
  const submitBtnText = mode === 'add' ? 'Create' : 'Save';

  return (
    <Modal open={open} title={title} onClose={handleCLose}>
      <form onSubmit={handleSubmit(submit)}>
        <Controller
          rules={{ required: 'Required field' }}
          disabled={loading}
          name="title"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => {
            return <Input label="Title" error={invalid} helperText={error?.message} {...field} />;
          }}
        />
        <Controller
          disabled={loading}
          name="description"
          control={control}
          render={({ field }) => <Textarea label="Description" {...field} />}
        />

        <Button type="submit" loading={loading}>
          {submitBtnText}
        </Button>
      </form>
    </Modal>
  );
};
