import { IVMs } from 'store/types.ts';
import { useLoaderData } from 'react-router-dom';

export const useStore = (): IVMs => {
  const data = useLoaderData();

  return data as IVMs;
};
