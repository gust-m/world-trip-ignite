import { ReactNode } from 'react';
import { Box, Image, Text, ImageProps, Show } from '@chakra-ui/react';

interface ItemProps extends ImageProps {
  alt: string;
  src: string;
  children: ReactNode;
}

export const Item = ({ alt, src, children, ...rest }: ItemProps) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Show above="md">
        <Image
          alt={alt}
          src={src}
          align="center"
          h={{
            md: '10',
            lg: '14',
            xl: '20',
          }}
          {...rest}
        />
      </Show>
      <Text
        fontWeight="semibold"
        fontSize={{
          sm: 'xl',
          md: 'md',
          lg: 'xl',
          xl: '2xl',
        }}
        mt="6"
        as="span"
      >
        {children}
      </Text>
    </Box>
  );
};
