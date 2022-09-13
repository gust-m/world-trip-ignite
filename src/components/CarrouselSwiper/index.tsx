import { ForwardRefRenderFunction, forwardRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Carrousel } from './Carrousel';

const CarrouselSwiperBase: ForwardRefRenderFunction<HTMLDivElement> = (
  {},
  ref
) => {
  return (
    <Flex
      justify="center"
      mb={{
        base: '4',
        sm: '10',
      }}
      ref={ref}
    >
      <Box
        maxW={{
          base: '100%',
          sm: '540px',
          md: '720px',
          lg: '920px',
          xl: '1160px',
          '2xl': '1240px',
        }}
        h={{
          base: '16rem',
          lg: '22rem',
          xl: '34rem',
        }}
        pos="relative"
      >
        <Carrousel />
      </Box>
    </Flex>
  );
};

export const CarrouselSwiper = forwardRef(CarrouselSwiperBase);
