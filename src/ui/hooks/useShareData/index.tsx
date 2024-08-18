import { IUseShareData, TShareData } from './types.ts';
import { useCallback, useState } from 'react';
import { useStore } from 'hooks/useStore';

const cache = new Map<string, Promise<File[]>>();

export const useShareData = ({ files: dataFiles, ...data }: TShareData): IUseShareData => {
  const [loading, setLoading] = useState(false);
  const {
    notification: { errorNotification },
  } = useStore();
  const { canShare } = navigator;
  const shareIcon = Boolean(canShare) ? 'share' : 'link';

  const navShare = navigator.share;
  const writeText = navigator.clipboard.writeText;

  const share = useCallback(async () => {
    if (canShare) {
      try {
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
        const shareFilesData = { ...data, files };

        if (canShare(shareFilesData)) {
          await navShare(shareFilesData);
        } else if (canShare(data)) {
          await navShare(data);
        } else {
          await writeText(data.url);
        }
      } catch (error) {
        errorNotification(error);
        await writeText(data.url);
      }
    } else {
      await writeText(data.url);
    }
  }, [canShare, data]);

  return {
    loading,
    share,
    shareIcon,
  };
};
