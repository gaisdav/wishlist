import { IUseShareData, TShareData } from './types.ts';
import { useCallback, useState } from 'react';

const cache = new Map<string, Promise<File[]>>();

export const useShareData = (data: TShareData): IUseShareData => {
  const [loading, setLoading] = useState(false);
  const canShare = 'canShare' in navigator;
  const shareIcon = canShare ? 'share' : 'link';

  const share = useCallback(async () => {
    if (canShare) {
      const { files: dataFiles } = data;
      let files: File[] = [];

      if (typeof dataFiles === 'string') {
        if (cache.has(dataFiles)) {
          files = (await cache.get(dataFiles)) || [];
        } else {
          setLoading(true);

          try {
            const response = await fetch(dataFiles);
            const blob = await response.blob();
            files = [
              new File([blob], 'fileName', {
                type: blob.type,
              }),
            ];
          } catch (e) {
            files = [];
          } finally {
            setLoading(false);
          }
        }
      }
      await navigator.share({ ...data, files });
    } else {
      await navigator.clipboard.writeText(data.url);
    }
  }, [canShare, data]);

  return {
    loading,
    share,
    shareIcon,
  };
};
