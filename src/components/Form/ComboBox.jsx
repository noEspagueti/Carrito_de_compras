import React from "react";

export const ComboBox = ({ listCategories }) => {

  return (
    <select
      name="categoryProduct"
      className="appearance-none px-2 text-gray-700 bg-indigo-100 rounded-lg p-2 text-center outline-none font-medium">
      {listCategories.map((item, index) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};
