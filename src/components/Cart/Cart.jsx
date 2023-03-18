import { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";

export const Cart = ({ product }) => {
  const { addProduct } = useContext(ContextPro);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center rounded-lg shadow-lg box-border bg-white gap-5">
      <div className="w-full p-4 rounded-lg bg-white flex justify-center row-start-3">
        <img src={product.image} alt={product.title} className="w-28" />
      </div>
      <div className=" text-sm mt-3 p-5 relative flex justify-center flex-col">
        <h1 className="font-bold">{product.title.split(" ", 4).join(" ")}</h1>
        <p>Precio</p>
        <p className="font-medium">S/. {product.price}</p>
        <button
          onClick={() => addProduct(product)}
          className="bg-green-400 p-1 rounded-lg text-white"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
