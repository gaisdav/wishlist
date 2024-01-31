import { FC, useEffect } from 'react';
import { IEditWishModal } from './types.ts';
import { useForm, FormProvider } from 'react-hook-form';
import { WishModal } from './WishModal.tsx';
import { IEditWishDTO } from 'data/Wish/entity';

export const EditWishModal: FC<IEditWishModal> = ({ wish, loading = false, open = false, onClose, onSubmit }) => {
  const methods = useForm<IEditWishDTO>({
    defaultValues: {
      title: wish?.title,
      description: wish?.description,
    },
  });

  useEffect(() => {
    methods.reset({
      title: wish?.title,
      description: wish?.description,
    });
  }, [methods, wish]);

  return (
    <FormProvider {...methods}>
      <WishModal mode="edit" open={open} onClose={onClose} onSubmit={onSubmit} loading={loading} />
    </FormProvider>
  );
};
