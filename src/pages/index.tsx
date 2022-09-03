import type { NextPage } from "next";
import Benefits from "../components/Benefits/Benefits";
import Hero from "../components/Hero";
import ProductsCarousel from "../components/Products/ProductsCarousel";
import { homeHero } from "../mocks/heroMock";
import { popularProducts } from "../mocks/productsMock";

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
      <ProductsCarousel
        eyebrow={popularProducts.eyebrow}
        title={popularProducts.title}
        description={popularProducts.description}
        slides={popularProducts.slides}
      />
    </div>
  );
};

export default Home;
