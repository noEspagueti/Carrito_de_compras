import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { ContextPro } from "../../context/ProductoContext";
import { CartRunway } from "./CartRunway";

export const Runway = () => {
  const { setRunway, showRunway, addCart } = useContext(ContextPro);
  return (
    <div
      className="w-1/4 bg-slate-100 shadow-xl fade top-0 right-0 overflow-x-hidden"
      style={{
        animationName: showRunway ? "cart" : "closeCart",
        display: showRunway ? "block" : "none",
      }}
    >
      <section className="p-5 font-bold bg-white h-20 top-0">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl">Tu canasta</h1>
          <a
            href="#"
            className="bg-slate-300 rounded-full p-1"
            onClick={() => setRunway(false)}
          >
            <FiX color="white" />
          </a>
        </div>
      </section>
      <section className="bg-white h-full mt-3 block items-center justify-center text-center overflow-y-scroll container">
        {(addCart.length > 0 &&
          addCart.map((item) => {
            return (
              <CartRunway
                key={item.id}
                img={item.url}
                price={item.price}
                title={item.title}
                cant={item.cant}
                id={item.id}
              />
            );
          })) || <h1 className="m-4">No hay nada en tu carrito</h1>}
      </section>

      <section className="p-5 w-full h-36 sticky bottom-0 z-50 flex flex-row items-center justify-center">
        <button className="bg-green-400 w-full flex justify-center items-center rounded-lg py-4 gap-3 shadow-2xl">
          <p className="text-white font-extrabold">Subtotal</p>
          <p className="text-white">{`S/.${addCart
            .reduce((acum, item) => acum + item.price * item.cant, 0)
            .toFixed(2)}`}</p>
        </button>
      </section>
    </div>
  );
};
