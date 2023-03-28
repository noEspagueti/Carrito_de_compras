import { HeadForm } from "./components/Form";
import { ContextPro } from "./context/ProductoContext";
import { ShopCart } from "./components/Cart/ShopCart";
import { Runway } from "./components/Runway/Runway";
import { useProduct } from "./hooks/useProduct";
import { reduce, init, cartReduce } from "./reducer";
import { useEffect } from "react";

export const App = () => {
  const [state, dispatch, showRunway, setRunway] = useProduct(reduce, [], init);
  const [
    addCart,
    ,
    ,
    ,
    addToCartProduct,
    incrementProduct,
    decrementProduct,
    deleteProduct,
  ] = useProduct(cartReduce, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);

  return (
    <ContextPro.Provider
      value={{
        state,
        setRunway,
        showRunway,
        addCart,
        dispatch,
        addToCartProduct,
        incrementProduct,
        decrementProduct,
      }}
    >
      <div className="flex flex-col justify-center items-center containerShop w-1/2">
        <HeadForm />
        <ShopCart />
      </div>
      <Runway />
    </ContextPro.Provider>
  );
};
