import { createContext } from 'react';
import { createGenericContext } from '../createGenericContext';

interface IShopContext {
  state: IDocumentCreatorState;
  dispatch: (arg: DispatchAction) => void;
}

const [ShopContext, ShopProvider] = createGenericContext<>()