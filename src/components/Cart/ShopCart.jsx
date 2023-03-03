import { ProductCart } from "./ProductCart";
import { Runaway } from "./context/contextRunAway";

export const ShopCart = () => {
  return (
    <div className="w-3/4 h-full mt-4 box-content">
      <h1 className="font-semibold text-2xl text-indigo-900 m-4 text-center">
        RESULTADOS
      </h1>
      <Runaway.Provider value={{}}>
        <ProductCart />
      </Runaway.Provider>
    </div>
  );
};
