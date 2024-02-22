import { FC } from 'react';
import { IImg } from './types.ts';

export const Img: FC<IImg> = ({ alt, decoding = 'async', loading = 'lazy', ...props }) => (
  <img loading={loading} alt={alt} decoding={decoding} {...props} />
);
