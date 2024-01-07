import { FC, PropsWithChildren } from 'react';
import css from './styles.module.scss';

export const AppWrapper: FC<PropsWithChildren> = (props) => {
  return <div className={css['app-wrapper']}>{props.children}</div>;
};
