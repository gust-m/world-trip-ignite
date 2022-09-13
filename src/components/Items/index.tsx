import { Flex, Stack, Show, Hide } from '@chakra-ui/react';

import { ItemsSection } from './ItemsSection';
import { MobileItemsSection } from './MobileItemsSection';

const Items = () => {
  return (
    <Flex
      justify="center"
      py={{
        base: '10',
        md: '20',
      }}
    >
      <Show above="md">
        <Stack
          w="100%"
          spacing={['6', '8', 'auto']}
          maxW={{
            sm: 468,
            md: 680,
            lg: 920,
            xl: 1160,
          }}
          direction={['column', 'row']}
        >
          <ItemsSection />
        </Stack>
      </Show>
      <Hide above="md">
        <MobileItemsSection />
      </Hide>
    </Flex>
  );
};

export default Items;
