export type TShareData = {
  title?: string;
  text?: string;
  url: string;
};

export type IUseShareData = {
  share: () => Promise<void>;
  shareIcon: 'reply' | 'link';
};
