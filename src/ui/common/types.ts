import { Component as SolidComponent, JSX } from 'solid-js';

export interface IBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface IComponent<P = object, T = HTMLElement>
  extends SolidComponent<P & JSX.HTMLAttributes<T>> {}
