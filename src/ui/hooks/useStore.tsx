import { useContext } from 'react';
import { StoreContext } from 'providers/store.tsx';
import { IVMs } from 'store/types.ts';

export const useStore = <T extends keyof IVMs>(key: T) => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within an AppStateProvider');
  }

  return context[key];
};
