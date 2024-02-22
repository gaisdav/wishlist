import { CardProps } from '@mui/joy';
import { HTMLAttributes } from 'react';

export interface ICardsProps extends CardProps {}

export type TCardComponent = ICardsProps & HTMLAttributes<HTMLDivElement>;
