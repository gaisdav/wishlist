import { createContext, FC, PropsWithChildren } from 'react';
import { IStoreProvider } from './types.ts';
import { IVMs } from 'store/types.ts';

/**
 * Create a context
 */
export const StoreContext = createContext<IVMs | null>(null);

/**
 * Create a store provider component
 */
export const AppStateProvider: FC<PropsWithChildren<IStoreProvider>> = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
