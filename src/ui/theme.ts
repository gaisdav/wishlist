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
    JoyInput: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    JoyTextarea: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    JoySkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
    JoyLinearProgress: {
      defaultProps: {
        variant: 'soft',
      },
    },
    JoyAvatar: {
      defaultProps: {
        variant: 'soft',
      },
    },
  },
});
