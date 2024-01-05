import css from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';

export const PageWrapper: FC<PropsWithChildren> = (props) => {
  return <div className={css['page-wrapper']}>{props.children}</div>;
};
