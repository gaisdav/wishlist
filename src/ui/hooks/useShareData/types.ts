export type TShareData = Omit<ShareData, 'files'> & { url: string; files?: File[] | string };

export type IUseShareData = {
  loading: boolean;
  share: () => Promise<void>;
  shareIcon: 'share' | 'link';
};
