import { Flex, Image, Show } from '@chakra-ui/react';
import { HomeBannerDescription } from './HomeBannerDescription';

export const HomeBanner = () => {
  return (
    <Flex
      bgImage="/background.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      pos="relative"
    >
      <HomeBannerDescription />
      <Show above="md">
        <Image
          alt="Avião entre as nuvens"
          src="/airplane.svg"
          mx="auto"
          pos="absolute"
          bottom={{
            md: '-5',
            lg: '-7',
            xl: '-10',
          }}
          right={{
            md: '10',
            lg: '20',
            xl: '40',
          }}
          w={{
            md: '15rem',
            lg: '20rem',
            xl: '24rem',
          }}
        />
      </Show>
    </Flex>
  );
};
