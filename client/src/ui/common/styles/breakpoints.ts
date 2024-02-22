import { IBreakpoints } from '../types.ts';

export const breakpoints: IBreakpoints = {
  // Small tablets and large smartphones (landscape view)
  sm: 576,
  // Small tablets (portrait view)
  md: 768,
  // Tablets and small desktops
  lg: 992,
  // Large tablets and desktops
  xl: 1200,
};

(Object.keys(breakpoints) as (keyof IBreakpoints)[]).forEach((breakpoint) => {
  document.documentElement.style.setProperty(
    `--screen-${breakpoint}-min`,
    breakpoints[breakpoint] + 'px',
  );
});
