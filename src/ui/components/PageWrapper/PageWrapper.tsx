import css from './styles.module.scss';
import { IComponent } from '../../common/types.ts';

export const PageWrapper: IComponent = (props) => {
  return <div class={css['page-wrapper']}>{props.children}</div>;
};
