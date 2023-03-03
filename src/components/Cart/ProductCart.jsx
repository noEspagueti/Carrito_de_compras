import { Cart } from "./Cart";
import { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";
import { useFetchData } from "../../hooks/useFetchData";

export const ProductCart = () => {

  const getProduct = useContext(ContextPro);

  const product = useFetchData().filter(
    (item) => item.category === getProduct.state.category
  );

  return (
    <div className="grid grid-cols-4 gap-4 w-full p-3">
      {product.map((item) => {
        return <Cart key={item.id} product={item} />;
      })}
    </div>
  );
};
