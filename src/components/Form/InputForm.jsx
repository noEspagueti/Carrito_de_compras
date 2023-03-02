import React from "react";

export const InputForm = () => {
  return (
    <>
      <input
        type="search"
        id="search"
        name="inputForm"
        className="block w-full p-3 text-sm text-gray-900 rounded-lg  bg-indigo-100"
        placeholder="Buscar producto"
      />
      <button type="submit" className="bg-indigo-600 p-2 text-white rounded-lg">
        Buscar
      </button>
    </>
  );
};
