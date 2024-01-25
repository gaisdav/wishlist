import { forwardRef } from 'react';
import { IInputProps } from './types.ts';
import { FormControl, FormHelperText, FormLabel, Input as JoyInput } from '@mui/joy';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, helperText, error, variant = 'outlined', className, ...props }, ref) => {
    return (
      <FormControl error={error} className={className}>
        {label && <FormLabel>{label}</FormLabel>}
        <JoyInput variant={variant} ref={ref} {...props} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);

Input.displayName = 'Input';
