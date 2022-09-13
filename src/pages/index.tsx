import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Flex, Text, Divider, Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { HomeBanner } from '../components/HomeBanner';
import { CarrouselSwiper } from '../components/CarrouselSwiper';
import Link from 'next/link';

const Items = dynamic(() => import('../components/Items'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Flex flexDir="column">
      <Header />

      <HomeBanner />

      <Items />

      <Flex justify="center">
        <Divider borderColor="#47585B" borderWidth="2px" w="20" />
      </Flex>

      <Flex my="12" justify="center" textAlign="center" fontWeight="medium">
        <Text
          fontSize={{
            base: '2xl',
            md: '4xl',
          }}
          lineHeight={{
            base: '2rem',
            md: '3.25rem',
          }}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <Link href="/continent" passHref>
        <Box w="100%">
          <CarrouselSwiper />
        </Box>
      </Link>
    </Flex>
  );
};

export default Home;
