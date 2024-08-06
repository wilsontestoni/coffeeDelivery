import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeList, CoffeeSection } from "./styles";
import { coffees } from "../../../data.json";

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
