import { useReducer, useEffect } from "react";
import { HeadForm } from "./components/Form";
import { reduce, init } from "./reducer/reduce";
import { ContextPro } from "./context/ProductoContext";
import { ShopCart } from "./components/Cart/ShopCart";

export const App = () => {
  const [state, dispatch] = useReducer(reduce, {}, init);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);

  return (
    <ContextPro.Provider value={{ state }}>
      <HeadForm action={dispatch} />
      <ShopCart />
    </ContextPro.Provider>
  );
};
