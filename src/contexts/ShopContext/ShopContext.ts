import { DispatchAction, ShopState, DispatchTypes } from "./types";
import { shopReducer } from "reducers/shopReducer";
import { createContext, useContext } from "react";

interface ShopContext {
  state: ShopState;
  dispatch: (arg: DispatchAction) => void;
}

const shopContext = createContext<ShopContext | undefined>(undefined);
const ShopContextProvider = shopContext.Provider;

const useShopContext = () => {
  const c = useContext(shopContext);
  if (!c) {
    throw new Error("useContext must be inside a Provider with a value");
  }

  return c;
};

export { useShopContext, ShopContextProvider, shopReducer, DispatchTypes };
