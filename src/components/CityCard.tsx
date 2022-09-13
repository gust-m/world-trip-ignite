import { Box, Flex, Image, WrapItem } from '@chakra-ui/react';

interface CityCardProps {
  city: string;
  country: string;
  img: string;
}

export const CityCard = ({ city, country, img }: CityCardProps) => {
  return (
    <WrapItem>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w="64"
      >
        <Image src={img} alt="Cidade de Londres" h="44" w="100%" />

        <Flex p="6" align="center">
          <Box>
            <Box
              mb="3"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              fontSize="xl"
            >
              {city}
            </Box>

            <Box fontSize="md">{country}</Box>
          </Box>

          <Image
            src="https://thumbs.dreamstime.com/b/bandeira-brit%C3%A2nica-97012266.jpg"
            alt="London Flag"
            borderRadius="50%"
            h="2rem"
            ml="auto"
          />
        </Flex>
      </Box>
    </WrapItem>
  );
};
