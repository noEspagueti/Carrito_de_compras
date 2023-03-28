import React, { useContext } from "react";
import { BiTrashAlt, BiPlus } from "react-icons/bi";
import { ContextPro } from "../../context/ProductoContext";

export const CartRunway = ({ img, price, title, cant, id }) => {
  const { incrementProduct, decrementProduct } = useContext(ContextPro);
  return (
    <section className="flex flex-row items-center shadow-md w-full h-24 p-4 mt-2 justify-between">
      <div className="flex items-center gap-4 mt-4">
        {/* image */}
        <div className="w-12 p-1 box-border object-center">
          <img src={img} alt={title} />
        </div>
        {/* details */}
        <div className="block text-left">
          <h1 className="text-sm text-slate-700">
            {title.split(" ", 4).join(" ")}
          </h1>
          <p className="font-bold text-xs">S/. {price}</p>
        </div>
      </div>
      <div className="bg-slate-100 w-24 h-10 rounded-full container box-border flex items-center justify-between px-2">
        <a href="#" onClick={() => decrementProduct(id,cant)}>
          {<BiTrashAlt />}
        </a>
        <p>{cant} U</p>
        <a href="#" onClick={() => incrementProduct(id)}>
          {<BiPlus />}
        </a>
      </div>
    </section>
  );
};
