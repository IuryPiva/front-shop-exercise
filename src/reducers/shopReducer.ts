import { DispatchAction, ShopState } from "contexts/ShopContext/types";
import { Product } from "types/product";

const addProduct = (
  products: ShopState["products"],
  actionProduct: Product
) => {
  let product = products.get(actionProduct.id);

  if (product) {
    product = { ...product };

    product.onHand++;
    products.set(product.id, product);
  } else {
    product = { ...actionProduct };

    product.onHand = 1;
    products.set(actionProduct.id, product);
  }

  return products;
};

const dropProduct = (
  products: ShopState["products"],
  actionProduct: Product
) => {
  let product = products.get(actionProduct.id);

  if (product) {
    product = { ...product };

    if (product.onHand === 0)
      throw new Error("No more of this product in the basket");

    if (product.onHand === 1) {
      product.onHand--;
      products.delete(product.id);
    } else {
      product.onHand--;
      products.set(product.id, product);
    }
  } else throw new Error("Product not in the basket yet");

  return products;
};

export const shopReducer = (
  state: ShopState,
  action: DispatchAction
): ShopState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: addProduct(state.products, action.payload),
        totalPrice: state.totalPrice + parseFloat(action.payload.price),
      };

    case "DROP_PRODUCT":
      return {
        ...state,
        products: dropProduct(state.products, action.payload),
        totalPrice: state.totalPrice - parseFloat(action.payload.price),
      };

    default:
      throw new Error("Missing action type");
  }
};
