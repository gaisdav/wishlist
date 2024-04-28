import { IUseShareData, TShareData } from './types.ts';
import { useCallback } from 'react';

export const useShareData = (data: TShareData): IUseShareData => {
  const canShare = 'canShare' in navigator;
  const shareIcon = canShare ? 'reply' : 'link';

  const share = useCallback(async () => {
    if (canShare) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(data.url);
    }
  }, [canShare, data]);

  return {
    share,
    shareIcon,
  };
};
