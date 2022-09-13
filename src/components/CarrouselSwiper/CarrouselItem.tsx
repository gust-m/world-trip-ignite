import { Box, Image, Text } from '@chakra-ui/react';

interface CarrouselItemProps {
  continent: string;
  description: string;
  src: string;
}

export const CarrouselItem = ({
  continent,
  description,
  src,
}: CarrouselItemProps) => {
  return (
    <>
      <Image
        src={src}
        alt={continent}
        h={{
          base: '16rem',
          lg: '22rem',
          xl: '34rem',
        }}
        w="100%"
        className="swiper-lazy"
      />
      <Box
        pos="absolute"
        h="28"
        top={{
          base: 'calc(50% - (5rem/2))',
          sm: 'calc(50% - (7rem/2))',
        }}
        right="0"
        left="0"
        textAlign="center"
      >
        <Text
          fontWeight="bold"
          fontSize={{
            base: '4xl',
            sm: '5xl',
          }}
          lineHeight={{
            base: '3rem',
            sm: '4.5rem',
          }}
          color="white.700"
        >
          {continent}
        </Text>
        <Text
          fontWeight="bold"
          fontSize={{
            base: 'md',
            sm: 'lg',
            md: '2xl',
          }}
          lineHeight="2.25rem"
          color="white.700"
        >
          {description}
        </Text>
      </Box>
    </>
  );
};
