import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';

export const ContinentDescription = () => {
  return (
    <Flex justify="center">
      <Stack
        direction={{
          base: 'column',
          xl: 'row',
        }}
        align="center"
        spacing="auto"
        w="100%"
        py="20"
        maxW={{
          base: '300px',
          sm: '450px',
          md: '800px',
          xl: '1160px',
        }}
      >
        <Box
          pb={{
            base: '10',
            xl: '0',
          }}
          maxW={600}
        >
          <Text
            textAlign="justify"
            fontSize={{
              base: 'lg',
              sm: 'xl',
              lg: '2xl',
            }}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box maxW={500} textAlign="center">
          <HStack
            spacing={{
              base: '10',
              sm: '20',
            }}
            fontWeight="semibold"
            h="100%"
          >
            <Text
              color="#FFBA08"
              fontSize={{
                base: '3xl',
                sm: '5xl',
              }}
              as="span"
            >
              50
              <Text
                color="#47585B"
                fontSize={{
                  base: 'md',
                  sm: '2xl',
                }}
              >
                países
              </Text>
            </Text>
            <Text
              color="#FFBA08"
              fontSize={{
                base: '3xl',
                sm: '5xl',
              }}
              as="span"
            >
              60
              <Text
                color="#47585B"
                fontSize={{
                  base: 'md',
                  sm: '2xl',
                }}
              >
                línguas
              </Text>
            </Text>
            <Text
              color="#FFBA08"
              fontSize={{
                base: '3xl',
                sm: '5xl',
              }}
              as="span"
            >
              27
              <Text
                color="#47585B"
                fontSize={{
                  base: 'md',
                  sm: '2xl',
                }}
              >
                cidades +100
              </Text>
            </Text>
          </HStack>
        </Box>
      </Stack>
    </Flex>
  );
};
