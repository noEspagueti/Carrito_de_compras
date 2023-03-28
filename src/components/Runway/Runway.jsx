import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { ContextPro } from "../../context/ProductoContext";
import { CartRunway } from "./CartRunway";

export const Runway = () => {

  const { setRunway, showRunway, addCart } = useContext(ContextPro);

  return (
    <div
      className="w-1/4 bg-slate-100 shadow-xl fade top-0 right-0"
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
      <section className="bg-white h-full mt-3 block items-center justify-center text-center overflow-scroll container">
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
          })) || <h1>No hay nada en tu carrito</h1>}
      </section>
    </div>
  );
};
