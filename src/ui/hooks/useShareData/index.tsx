import { IUseShareData, TShareData } from './types.ts';
import { useCallback, useState, useMemo } from 'react';
import { useStore } from 'hooks/useStore';

const cache = new Map<string, Promise<File[]>>();

export const useShareData = ({ files: dataFiles, ...data }: TShareData): IUseShareData => {
  const [loading, setLoading] = useState(false);
  const {
    notification: { successNotification },
  } = useStore();

  const copy = useCallback(async (url: string) => {
    await navigator.clipboard.writeText(url);
    successNotification('Link copied to clipboard.');
  }, []);

  const canShare = useMemo(() => typeof navigator !== 'undefined' && navigator.canShare, []);
  const shareIcon = useMemo(() => (canShare ? 'share' : 'link'), [canShare]);

  const share = useCallback(async () => {
    if (!canShare) {
      await copy(data.url);
      return;
    }

    let files: File[] = [];

    if (typeof dataFiles === 'string') {
      if (cache.has(dataFiles)) {
        files = (await cache.get(dataFiles)) || [];
      } else {
        setLoading(true);
        try {
          const response = await fetch(dataFiles);
          const blob = await response.blob();
          files = [new File([blob], 'fileName', { type: blob.type })];
          cache.set(dataFiles, Promise.resolve(files));
        } catch (err) {
          files = [];
        } finally {
          setLoading(false);
        }
      }
    }

    const shareData = { ...data, files };
    console.log(shareData);
    if (files.length > 0 && navigator.canShare({ files })) {
      await navigator.share(shareData);
    } else if (navigator.canShare(data)) {
      await navigator.share(data);
    }
    await copy(data.url);
  }, [canShare, data, dataFiles]);

  return {
    loading,
    share,
    shareIcon,
  };
};
