import { useEffect } from "react";
import { ComboBox, InputForm } from ".";

export const HeadForm = ({ action }) => {
  const listCategoryProduct = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const onHandleChangeSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.target);
    action({
      type: "getProduct",
      categoryProduct: data.get("categoryProduct"),
      inputForm: data.get("inputForm"),
    });
  };

  return (
    <form
      className=" w-3/4 rounded-lg drop-shadow-lg flex gap-4 justify-center items-center bg-white flex-row p-4"
      onSubmit={onHandleChangeSubmit}
    >
      <ComboBox listCategories={listCategoryProduct} />
      <InputForm />
    </form>
  );
};
