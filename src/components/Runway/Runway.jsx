import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { ContextPro } from "../../context/ProductoContext";
import { useFetchData } from "../../hooks/useFetchData";

export const Runway = () => {
  const { setRunway, showRunway, addCart } = useContext(ContextPro);
  console.log(addCart);
  let list = useFetchData().filter(
    (item) => item.category === addCart.category
  );
  console.log(list);
  return (
    <div
      className="w-1/4 h-screen bg-slate-100 right-0 top-0 shadow-xl fixed z-10 fade"
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
      <section className="bg-white h-full my-3 p-10 block items-center justify-center text-center">
        {addCart.length ||
          ((
            <h1 className="text-gray-700">
              Aún no tienes productos en tu canasta
            </h1>
          ) && <div className="">{}</div>)}
      </section>
    </div>
  );
};
