import { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";
import { useFetchData } from "../../hooks/useFetchData";
import { ProductCart } from "./ProductCart";

export const ShopCart = () => {
  const getProduct = useContext(ContextPro);

  return (
    <div className="w-3/4 h-full rounded-lg mt-4  box-content">
      <h1 className="font-semibold text-2xl text-gray-900 m-4 text-center">
        RESULTADOS
      </h1>
      <ProductCart productItem={ useFetchData} typeProduct = {getProduct}/>
    </div>
  );
};
