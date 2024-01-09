import { FC } from 'react';
import { IImg } from './types.ts';

export const Img: FC<IImg> = ({ alt, decoding, ...props }) => <img alt={alt} decoding={decoding} {...props} />;
