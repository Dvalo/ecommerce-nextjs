import type { NextPage } from "next";
import Benefits from "../components/Benefits/Benefits";
import Hero from "../components/Hero";
import { homeHero } from "../mocks/heroMock";

const Home: NextPage = () => {
  return (
    <div>
      <Hero
        title={homeHero.title}
        description={homeHero.description}
        image={homeHero.image}
        graphics={homeHero.graphics}
      />
      <Benefits />
    </div>
  );
};

export default Home;
