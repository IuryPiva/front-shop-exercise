import React from "react";

import { render } from "@testing-library/react";

import { Home } from "./Home";
import { ShopProvider } from "contexts/ShopContext/ShopProvider";

describe("Home page", () => {
  test("Displays products", () => {
    const { getAllByTestId } = render(
      <ShopProvider>
        <Home />
      </ShopProvider>
    );

    const productCards = getAllByTestId(/product-card-/i);

    expect(productCards.length).toBeGreaterThan(0);
  });
});
