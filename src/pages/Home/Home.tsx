import { ProductCard } from "components/ProductCard";
import { DispatchTypes, useShopContext } from "contexts/ShopContext";
import React from "react";

export const Home = () => {
  const { state, dispatch } = useShopContext();

  const renderProducts = () =>
    state.availableProducts.map((product) => (
      <ProductCard
        product={product}
        key={product.id}
        action="add"
        onAdd={() => {
          dispatch({
            type: DispatchTypes.addProduct,
            payload: product,
          });
        }}
      />
    ));

  return <div className="flex flex-col gap-4">{renderProducts()}</div>;
};
