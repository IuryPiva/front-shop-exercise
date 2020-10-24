import { Product } from "types/product";

export interface ShopState {
  products: Map<number, Product>;
  availableProducts: Product[];
  totalPrice: number;
}

// Types used when using the `dispatch` function from reducer

// Available types to dispatch values to the reducer
export interface DispatchPayload<T, K = any> {
  type: T;
  payload: K;
}

export enum DispatchTypes {
  addProduct = "ADD_PRODUCT",
  dropProduct = "DROP_PRODUCT",
}

export type DispatchAction =
  | DispatchPayload<DispatchTypes.addProduct, Product>
  | DispatchPayload<DispatchTypes.dropProduct, Product>;
