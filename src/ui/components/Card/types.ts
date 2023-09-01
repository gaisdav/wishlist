import { IComponent } from '../../common/types.ts';

export interface ICardsProps {
  className?: string;
}

export type TCardComponent = IComponent<ICardsProps, HTMLDivElement>;
