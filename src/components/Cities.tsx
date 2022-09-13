import { Box, Flex, Text, Wrap } from '@chakra-ui/react';
import { CityCard } from '../components/CityCard';

export const Cities = () => {
  return (
    <Flex justify="center" mb="10">
      <Box
        w="100%"
        maxW={{
          base: '450px',
          md: '850px',
          xl: '1200px',
        }}
        pl={{
          md: '10',
        }}
      >
        <Text
          fontSize={{
            base: '2xl',
            sm: '4xl',
          }}
          fontWeight="medium"
          pb="10"
          pl={{
            base: '6',
            sm: '0',
          }}
        >
          Cidades +100
        </Text>
        <Wrap
          spacing="10"
          justify={{
            base: 'center',
            lg: 'start',
          }}
        >
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <CityCard
            city="Londres"
            country="Reino Unido"
            img="https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
        </Wrap>
      </Box>
    </Flex>
  );
};
