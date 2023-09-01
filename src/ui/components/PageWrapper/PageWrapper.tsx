import { IComponent } from '../../common/types.ts';
import css from './styles.module.scss';

export const PageWrapper: IComponent = ({ children }) => {
  return <div class={css['page-wrapper']}>{children}</div>;
};
