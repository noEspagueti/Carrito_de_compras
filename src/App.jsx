import { HeadForm } from "./components/Form";
import { ContextPro } from "./context/ProductoContext";
import { ShopCart } from "./components/Cart/ShopCart";
import { Runway } from "./components/Runway/Runway";
import { useProduct } from "./hooks/useProduct";
import { reduce, init, cartReduce, initCart } from "./reducer";
import { useEffect } from "react";

export const App = () => {
  const [state, dispatch, showRunway, setRunway] = useProduct(reduce, init, []);
  const [addCart, , , , addProduct] = useProduct(cartReduce, initCart, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);


  return (
    <ContextPro.Provider
      value={{ state, setRunway, showRunway, addCart, dispatch, addProduct }}
    >
      <HeadForm action={dispatch} />
      <ShopCart />
      <Runway />
    </ContextPro.Provider>
  );
};
