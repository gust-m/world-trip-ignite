import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Item } from './Item';

export const MobileItemsSection = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      w="85vw"
    >
      <GridItem>
        <Item alt="Taça de bebida com limão e um canudo" src="/cocktail.svg">
          <Text display="flex" align="center" as="span">
            <Text
              mr="2"
              color="yellow.400"
              fontSize="4xl"
              lineHeight="1rem"
              my="auto"
            >
              •
            </Text>
            vida noturna
          </Text>
        </Item>
      </GridItem>
      <GridItem>
        <Item
          alt="Prancha de surf na praia com um sol no fundo"
          src="/surf.svg"
        >
          <Text display="flex" align="center" as="span">
            <Text
              mr="2"
              color="yellow.400"
              fontSize="4xl"
              lineHeight="1rem"
              my="auto"
            >
              •
            </Text>
            praia
          </Text>
        </Item>
      </GridItem>
      <GridItem>
        <Item alt="Prédio" src="/building.svg">
          <Text display="flex" align="center" as="span">
            <Text
              mr="2"
              color="yellow.400"
              fontSize="4xl"
              lineHeight="1rem"
              my="auto"
            >
              •
            </Text>
            moderno
          </Text>
        </Item>
      </GridItem>
      <GridItem>
        <Item alt="Museu" src="/museum.svg">
          <Text display="flex" align="center" as="span">
            <Text
              mr="2"
              color="yellow.400"
              fontSize="4xl"
              lineHeight="1rem"
              my="auto"
            >
              •
            </Text>
            clássico
          </Text>
        </Item>
      </GridItem>
      <GridItem colSpan={2}>
        <Item alt="Planta terra" src="/earth.svg">
          <Text display="flex" align="center" as="span">
            <Text
              mr="2"
              color="yellow.400"
              fontSize="4xl"
              lineHeight="1rem"
              my="auto"
            >
              •
            </Text>
            e mais...
          </Text>
        </Item>
      </GridItem>
    </Grid>
  );
};
