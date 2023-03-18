import React from "react";
import { FiSearch } from "react-icons/fi";

export const InputForm = () => {
  return (
    <div className="flex w-full items-center">
      <input
        type="search"
        id="search"
        name="inputForm"
        className="block w-full px-3 h-10 text-sm text-gray-900 rounded-l-lg  bg-slate-100"
        placeholder="Buscar producto"
      />
      <button type="submit" className="bg-slate-100 h-10 p-3 rounded-r-lg">
        <FiSearch />
      </button>
    </div>
  );
};
