import { IComponent } from '../../common/types.ts';
import css from './styles.module.scss';

export const AppWrapper: IComponent = ({ children }) => {
  return <div class={css['app-wrapper']}>{children}</div>;
};
