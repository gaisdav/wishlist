import { Component as SolidComponent, JSX } from 'solid-js';

export interface IBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface IComponent<P = {}, T = HTMLElement>
  extends SolidComponent<P & Omit<JSX.HTMLAttributes<T>, 'class'>> {}
