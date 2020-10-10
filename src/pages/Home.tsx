import { ProductCard } from "components/ProductCard/ProductCard";
import React from "react";

const product = {
  id: 1,
  name: "Garlic",
  permalink: "garlic",
  description: "Useful to scare vampires",
  price: "0.5",
  unitValue: 100,
  unitToDisplay: "100g",
  onHand: 5,
  taxon: {
    id: 2,
    name: "Vegetables",
    permalink: "products/vegetables",
  },
  images: {
    id: 1,
    alt: "a garlic",
    thumbUrl:
      "https://staging.openfoodfrance.org/spree/products/94/mini/OFF.png",
    smallUrl:
      "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
    imageUrl:
      "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
    largeUrl:
      "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
  },
};

export const Home = () => (
  <>
    <ProductCard product={product} />
  </>
);
