import css from './styles.module.scss';
import { IComponent } from '../../common';

export const AppWrapper: IComponent = (props) => {
  return <div class={css['app-wrapper']}>{props.children}</div>;
};
