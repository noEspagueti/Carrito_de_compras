import React, { useContext } from "react";
import { ContextPro } from "../../context/ProductoContext";

export const ComboBox = ({ listCategories }) => {
  const { state } = useContext(ContextPro);
  return (
    <select
      defaultValue={state.category}
      name="categoryProduct"
      className="appearance-none px-2 text-gray-700 bg-slate-100 rounded-lg p-2 text-center outline-none font-medium"
    >
      {listCategories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
