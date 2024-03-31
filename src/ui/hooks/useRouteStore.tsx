import { IVMs } from 'store/types.ts';
import { useLoaderData } from 'react-router-dom';

export const useRouteStore = (): IVMs => {
  const data = useLoaderData();

  return data as IVMs;
};
