import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { ProductCard } from "./ProductCard";

const product = {
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
};

describe("Product card", () => {
  beforeEach(() => {
    cleanup();
  });

  test("renders product correctly", () => {
    const { getByText } = render(<ProductCard product={product} />);
    const productName = getByText(product.name);

    expect(productName).toBeInTheDocument();
  });

  test("add products when button 'add' is clicked", () => {
    jest.useFakeTimers();
    
    const onAdd = jest.fn();

    const { getByText } = render(
      <ProductCard product={product} onAdd={onAdd} action="add" />
    );

    const addButton = getByText("Add to cart");

    fireEvent.click(addButton);

    // Fake wait for tooltip to disappear
    jest.advanceTimersToNextTimer();

    expect(onAdd).toBeCalled();
  });

  test("remove products when button 'remove' is clicked", () => {
    jest.useFakeTimers();

    const onRemove = jest.fn();

    const { getByText } = render(
      <ProductCard product={product} onRemove={onRemove} action="remove" />
    );

    const removeButton = getByText("Remove");

    fireEvent.click(removeButton);

    expect(onRemove).toBeCalled();
  });
});
