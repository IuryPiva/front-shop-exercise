import React from "react";

import { fireEvent, render } from "@testing-library/react";

import { Home } from "pages/Home";
import { Cart } from "./Cart";
import { ShopProvider } from "contexts/ShopContext/ShopProvider";

describe("Cart page", () => {
  test("Show empty message if no product is selected", () => {
    const { getByText } = render(
      <ShopProvider>
        <Cart />
      </ShopProvider>
    );

    expect(getByText(`Empty cart, no fun =(`)).toBeDefined();
  });

  test("Show products and total when there is products in the cart", () => {
    const { getByTestId, queryByText } = render(
      <ShopProvider>
        <Home />
        <Cart />
      </ShopProvider>
    );

    const productCardAddButton = getByTestId("product-card-add-button-1");
    
    jest.useFakeTimers();
    fireEvent.click(productCardAddButton);
    jest.advanceTimersToNextTimer();

    expect(queryByText(`Empty cart, no fun =(`)).toBeNull();

    expect(getByTestId("cart-total")).toHaveTextContent("€ 0.50");
  });
});
