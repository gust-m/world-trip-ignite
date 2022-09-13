import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      '700': '#F5F8FA',
    },
    gray: {
      '700': '#47585B',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.700',
        color: 'gray.700',
      },
    },
  },
});
