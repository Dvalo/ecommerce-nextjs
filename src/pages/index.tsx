import type { NextPage } from "next";
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
    </div>
  );
};

export default Home;
