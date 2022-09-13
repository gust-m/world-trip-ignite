import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export const HomeBannerDescription = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box
      pt={{
        base: '6',
        md: '10',
        xl: '20',
      }}
      pl={{
        base: '10',
        lg: '20',
        xl: '36',
      }}
    >
      <Heading
        color="white.700"
        pb="5"
        fontWeight="medium"
        fontSize={{
          base: '2xl',
          lg: '3xl',
          xl: '4xl',
        }}
        lineHeight={{
          base: '2.5rem',
          lg: '2.75rem',
          xl: '3.25rem',
        }}
      >
        5 Continentes,
        <br />
        infinitas possibilidades
      </Heading>
      <Text
        color="white.700"
        pb={{
          base: '5',
          lg: '10',
          xl: '16',
        }}
        fontSize={{
          base: 'md',
          xl: 'xl',
        }}
        lineHeight="1.875rem"
      >
        Chegou a hora de tirar do papel a viagem {isWideScreen ? ' ' : <br />}
        que você
        {!isWideScreen ? ' ' : <br />}
        sempre sonhou.
      </Text>
    </Box>
  );
};
