import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { ProductCard } from "components/ProductCard/ProductCard";
import {
  DispatchTypes,
  useShopContext,
} from "contexts/ShopContext/ShopContext";
import { Product } from "types/product";

export const Cart = () => {
  const { state, dispatch } = useShopContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartProducts = [];

    for (const product of state.products.values()) {
      cartProducts.push(product);
    }

    setProducts(cartProducts);
  }, [state.totalPrice, state.products]);

  const cartIsEmpty = state.products.size === 0;

  return (
    <div className="flex flex-col gap-3">
      <Link className="text-gray-700 text-2xs" to="/">
        👈 back to Products
      </Link>
      <span className="text-gray-700">My cart</span>

      {cartIsEmpty ? (
        <span className="text-gray-700 mt-10">Empty cart, no fun 😕</span>
      ) : (
        <div className="pt-3 flex flex-col gap-3">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              action="remove"
              onRemove={() => {
                dispatch({
                  type: DispatchTypes.dropProduct,
                  payload: product,
                });
              }}
            />
          ))}
        </div>
      )}

      {!cartIsEmpty && (
        <div className="mt-8">
          <span className="text-lg">
            Total:
            <span data-testid="cart-total" className="text-gray-600 ml-4">
              € {state.totalPrice.toFixed(2)}
            </span>
          </span>

          <Button
            variant="contained"
            className="ml-10 capitalize bg-green-500 text-gray-100"
          >
            Proceed to checkout
          </Button>
        </div>
      )}
    </div>
  );
};
