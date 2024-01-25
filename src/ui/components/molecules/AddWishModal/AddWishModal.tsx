import { FC, useMemo } from 'react';
import { IAddWishModal } from './types.ts';
import { Modal } from '../Modal';
import { Button, Input, Textarea } from '../../atoms';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ICreateWishDTO } from '../../../../data/Wish/entity';

export const AddWishModal: FC<IAddWishModal> = ({ loading = false, open = false, mode = 'add', onClose, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<ICreateWishDTO>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleCLose = () => {
    if (onClose) {
      onClose();
      reset();
    }
  };

  const submit: SubmitHandler<ICreateWishDTO> = async (data) => {
    await onSubmit(data);
    handleCLose();
  };

  const title = useMemo(() => (mode === 'add' ? 'Add Wish' : 'Edit Wish'), [mode]);

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
          Create
        </Button>
      </form>
    </Modal>
  );
};
