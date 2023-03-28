import { Cart } from "./Cart";
import { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";
import { useFetchData } from "../../hooks/useFetchData";

export const ProductCart = () => {
  const { state } = useContext(ContextPro);

  const product = useFetchData().filter(
    (item) => item.category === state.category
  );

  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {product.map((item) => {
        return <Cart key={item.id} product={item} />;
      })}
    </div>
  );
};
