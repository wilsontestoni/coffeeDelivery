import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeList, CoffeeSection } from "./styles";
import { coffees } from "../../../data.json";

type Tag = string;
export interface Coffee {
  id: string;
  img: string;
  tags: Tag[];
  title: string;
  description: string;
  price: number;
}

export function Home() {
  return (
    <>
      <Intro />
      <CoffeeSection>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeList>
      </CoffeeSection>
    </>
  );
}
