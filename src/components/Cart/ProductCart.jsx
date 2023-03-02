import React from "react";

export const ProductCart = ({ productItem, typeProduct }) => {
  console.log(productItem());

  return (
    <div className="grid grid-cols-3 gap-3 w-full p-3">
      {productItem().map((item) => {
        if (item.category !== typeProduct.state.category) return;
        return (
          <div
            className="w-full h-full flex flex-col items-start justify-center rounded-lg shadow-lg  box-border bg-slate-50"
            key={item.id}
          >
            <div className="w-full p-4 rounded-lg bg-white flex justify-center row-start-3">
              <img src={item.image} alt={item.title} className="w-28" />
            </div>
            <div className=" text-sm mt-3 p-5 relative flex justify-center flex-col">
              <h1 className="font-bold">
                {item.title.split(" ", 3).join(" ")}
              </h1>
              <p>Precio:</p>
              <p className="font-medium">S/. {item.price}</p>
              <button className="bg-indigo-600 p-1 rounded-lg text-white">Comprar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
