import { IUseShareData, TShareData } from './types.ts';
import { useCallback, useState, useMemo } from 'react';
import { useStore } from 'hooks/useStore';

const cache = new Map<string, Promise<File[]>>();

export const useShareData = ({ files: dataFiles, ...data }: TShareData): IUseShareData => {
  const [loading, setLoading] = useState(false);
  const {
    notification: { errorNotification, successNotification },
  } = useStore();

  const copy = useCallback(async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // successNotification('Link copied to clipboard.');
    } catch (error) {
      errorNotification(error);
    }
  }, []);

  const canShare = useMemo(() => typeof navigator !== 'undefined' && navigator.canShare, []);
  const shareIcon = useMemo(() => (canShare ? 'share' : 'link'), [canShare]);

  const share = useCallback(async () => {
    if (!canShare) {
      // Fallback to copying the URL to clipboard if share API is not available
      try {
        await copy(data.url);
      } catch (clipboardError) {
        errorNotification(clipboardError);
      }
      return;
    }

    try {
      let files: File[] = [];

      if (typeof dataFiles === 'string') {
        // If files are provided as a URL, fetch and cache them
        if (cache.has(dataFiles)) {
          files = (await cache.get(dataFiles)) || [];
        } else {
          setLoading(true);
          try {
            const response = await fetch(dataFiles);
            const blob = await response.blob();
            files = [new File([blob], 'fileName', { type: blob.type })];
            cache.set(dataFiles, Promise.resolve(files));
          } catch (fetchError) {
            errorNotification(fetchError);
            files = [];
          } finally {
            setLoading(false);
          }
        }
      }

      const shareData = { ...data, files };

      if (files.length > 0 && navigator.canShare({ files })) {
        await navigator.share(shareData);
      } else if (navigator.canShare(data)) {
        await navigator.share(data);
      } else {
        await copy(data.url);
      }
    } catch (error) {
      errorNotification(error);
      try {
        await copy(data.url);
      } catch (clipboardError) {
        errorNotification(clipboardError);
      }
    }
  }, [canShare, data, dataFiles, errorNotification]);

  return {
    loading,
    share,
    shareIcon,
  };
};
