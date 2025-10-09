import { createContext, useContext } from "react";

const StoreContext = createContext();

export function Provider({ store, children }) {
  return (
    <StoreContext value={{ store, dispatch: store.dispatch }}>
      {children}
    </StoreContext>
  );
}

export const useSelector = (selector) =>
  selector(useContext(StoreContext).state);

export const useDispatch = () => useContext(StoreContext).dispatch;
