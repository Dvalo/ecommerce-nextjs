import { productCarousel } from "../types/product";
import { prefix } from "../utils/prefix";

const popularProducts: productCarousel = {
  eyebrow: "Products",
  title: "Our popular product",
  description:
    "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.",
  slides: [
    {
      category: "Living Room",
      name: "Wooden Bookshelf",
      snippet: "Combination of wood and wool",
      description: "Combination of wood and wool",
      price: "$62.23",
      images: [{ url: `${prefix}/assets/products/p1.png`, alt: "Alt" }],
    },
    {
      category: "Chair",
      name: "White Aesthetic Chair",
      snippet: "Combination of wood and wool",
      description: "Combination of wood and wool",
      price: "$63.47",
      images: [{ url: `${prefix}/assets/products/p2.png`, alt: "Alt" }],
    },
    {
      category: "Lamp",
      name: "Bardono Smart Lamp",
      snippet: "Easy to use with bluetooth connection",
      description: "Easy to use with bluetooth connection",
      price: "$62.23",
      images: [{ url: `${prefix}/assets/products/p3.png`, alt: "Alt" }],
    },
    {
      category: "Sofa",
      name: "Sofa Empuk Banget",
      snippet: "Using kapuk randu material",
      description: "Using kapuk randu material",
      price: "$58.39",
      images: [{ url: `${prefix}/assets/products/p4.png`, alt: "Alt" }],
    },
  ],
};

export { popularProducts };
