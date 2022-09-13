import { Item } from './Item';

export const ItemsSection = () => {
  return (
    <>
      <Item alt="Taça de bebida com limão e um canudo" src="/cocktail.svg">
        vida noturna
      </Item>
      <Item alt="Prancha de surf na praia com um sol no fundo" src="/surf.svg">
        praia
      </Item>
      <Item alt="Prédio" src="/building.svg">
        moderno
      </Item>
      <Item alt="Museu" src="/museum.svg">
        clássico
      </Item>
      <Item alt="Planta terra" src="/earth.svg">
        e mais...
      </Item>
    </>
  );
};
