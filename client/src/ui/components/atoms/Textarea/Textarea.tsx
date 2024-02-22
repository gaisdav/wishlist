import { forwardRef } from 'react';
import { ITextarea } from './types.ts';
import { FormControl, FormHelperText, FormLabel, Textarea as JoyTextarea } from '@mui/joy';

export const Textarea = forwardRef<HTMLDivElement, ITextarea>(
  ({ label, helperText, error, variant = 'outlined', minRows = 2, maxRows = 4, className, ...props }, ref) => {
    return (
      <FormControl error={error} className={className}>
        {label && <FormLabel>{label}</FormLabel>}
        <JoyTextarea variant={variant} minRows={minRows} maxRows={maxRows} ref={ref} {...props} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);

Textarea.displayName = 'Textarea';
