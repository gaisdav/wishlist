import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  cssVarPrefix: 'wl',
  components: {
    JoyCard: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyButton: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyIconButton: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyModalClose: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyModalDialog: {
      defaultProps: {
        variant: 'soft',
      },
    },
  },
});
