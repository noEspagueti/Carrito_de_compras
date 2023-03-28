import { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";

export const Cart = ({ product }) => {
  const { addToCartProduct } = useContext(ContextPro);

  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg w-40 shadow-lg">
      <img src={product.image} alt={product.title} className="w-16" />
      <h1 className="font-bold text-center">
        {product.title.split(" ", 4).join(" ")}
      </h1>
      <p>Precio</p>
      <p className="font-medium">S/. {product.price}</p>
      <button
        onClick={() => addToCartProduct(product)}
        className="bg-green-400 p-1 rounded-lg text-white w-full bottom-0"
      >
        Comprar
      </button>
    </div>
  );
};
