import { useContext } from "react";
import { ComboBox, InputForm } from ".";
import { BsCart3 } from "react-icons/bs";
import { ContextPro } from "../../context/ProductoContext";

export const HeadForm = ({ action }) => {
  const { setRunway } = useContext(ContextPro);

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
      onSubmit={(event) => onHandleChangeSubmit(event)}
    >
      <ComboBox listCategories={listCategoryProduct} />
      <InputForm />
      <a href="#" onClick={() => setRunway(true)}>
        <BsCart3 />
      </a>
    </form>
  );
};
