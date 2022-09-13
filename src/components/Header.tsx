import { Box, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box
      display="flex"
      w="100%"
      alignItems="center"
      justifyContent="center"
      py={{
        base: '4',
        md: '7',
      }}
      pos="relative"
    >
      <Image
        alt="worldtrip logo"
        src="/logo.svg"
        height={{
          base: '10',
          md: '12',
        }}
      />

      {/* <ChevronLeftIcon w="9" h="9" pos="absolute" left="60" cursor="pointer" /> */}
    </Box>
  );
};
