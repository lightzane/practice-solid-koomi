import {
  Accessor,
  JSX,
  createContext,
  createEffect,
  createSignal,
  useContext,
} from 'solid-js';
import { SetStoreFunction, createStore } from 'solid-js/store';
import { Koomi } from '../db';

// * ======================================================================
// *    (Create Context): Shopping Bag Context
// * ======================================================================
interface ShoppingBagContextValue {
  items: Koomi[];
  setItems: SetStoreFunction<Koomi[]>;

  dark: Accessor<boolean>;
  setDark: SetStoreFunction<boolean>;
}

const ShoppingBagContext = createContext<ShoppingBagContextValue>();

// * ======================================================================
// *    Shopping Bag Context Provider
// * ======================================================================
interface Props {
  children: JSX.Element;
}

export function ShoppingBagContextProvider(props: Props) {
  const [items, setItems] = createStore<Koomi[]>([]);

  const [dark, setDark] = createSignal(false);

  createEffect(() => {
    console.log('Called everytime the dark value changed:', dark());
  });

  const context: ShoppingBagContextValue = {
    items,
    setItems,
    dark,
    setDark,
  };

  return (
    <ShoppingBagContext.Provider value={context}>
      {props.children}
    </ShoppingBagContext.Provider>
  );
}

// * ======================================================================
// *    (Use Context): Shopping Bag Context Value
// * ======================================================================
// ! This usually needs to come after the context provider has been defined
export function useShoppingBagContext(): ShoppingBagContextValue {
  return useContext(ShoppingBagContext);
}
