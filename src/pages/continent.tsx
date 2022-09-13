import { Flex, Text } from '@chakra-ui/react';
import { Cities } from '../components/Cities';
import { ContinentDescription } from '../components/ContinentDescription';
import { Header } from '../components/Header';

const Continent = () => {
  return (
    <Flex flexDir="column">
      <Header />

      <Flex
        bgImage="/londonBackground.png"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
        h={{
          base: '350px',
          md: '400px',
          xl: '500px',
        }}
      >
        <Text
          color="white.700"
          fontSize={{
            base: '3xl',
            xl: '5xl',
          }}
          fontWeight="semibold"
          bottom="8vh"
          left="10vw"
          pos="absolute"
        >
          Europa
        </Text>
      </Flex>

      <ContinentDescription />

      <Cities />
    </Flex>
  );
};

export default Continent;
