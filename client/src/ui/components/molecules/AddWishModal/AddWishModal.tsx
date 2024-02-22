import { FC } from 'react';
import { IAddWishModal } from './types.ts';
import { FormProvider, useForm } from 'react-hook-form';
import { WishModal } from './WishModal.tsx';
import { ICreateWishDTO } from 'data/wish/entity';

export const AddWishModal: FC<IAddWishModal> = ({ loading = false, open = false, onClose, onSubmit }) => {
  const methods = useForm<ICreateWishDTO>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <WishModal mode="add" open={open} onClose={onClose} onSubmit={onSubmit} loading={loading} />
    </FormProvider>
  );
};
