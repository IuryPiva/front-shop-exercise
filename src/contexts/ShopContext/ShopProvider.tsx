import React, { useReducer } from "react";

import { shopReducer } from "reducers/shopReducer";
import { ShopState } from "./types";
import { ShopContextProvider } from "./ShopContext";

const initialState: ShopState = {
  products: new Map(),
  totalPrice: 0,
  availableProducts: [
    {
      id: 1,
      name: "Garlic",
      permalink: "garlic",
      description: "Useful to scare vampires",
      price: "0.5",
      unitValue: 100,
      unitToDisplay: "100g",
      onHand: 0,
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
    },
    {
      id: 5,
      name: "Potatoes",
      permalink: "potatoes",
      description:
        "This potates are suitable for frying. Perfect for your tortillas de patatas",
      price: "1.5",
      unitValue: 1000,
      unitToDisplay: "1kg",
      onHand: 0,
      taxon: {
        id: 2,
        name: "Vegetables",
        permalink: "products/vegetables",
      },
      images: {
        id: 2,
        alt: "a bunch of potates",
        thumbUrl:
          "https://staging.openfoodfrance.org/spree/products/94/mini/OFF.png",
        smallUrl:
          "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
        imageUrl:
          "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
        largeUrl:
          "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
      },
    },
    {
      id: 6,
      name: "Tomatoes",
      permalink: "tomatoes",
      description: "Excelent choice for a fresh salad",
      price: "2.2",
      unitValue: 500,
      unitToDisplay: "500g",
      onHand: 0,
      taxon: {
        id: 3,
        name: "Fruits",
        permalink: "products/fruits",
      },
      images: {
        id: 3,
        alt: "shinny tomates",
        thumbUrl:
          "https://staging.openfoodfrance.org/spree/products/94/mini/OFF.png",
        smallUrl:
          "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
        imageUrl:
          "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
        largeUrl:
          "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
      },
    },
  ],
};

export const ShopProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContextProvider value={{ state, dispatch }}>
      {children}
    </ShopContextProvider>
  );
};
