import React, { useEffect } from "react";
import "./createproduct.scss";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../../context/api/productApi";

const initialState = {
  title: "",
  price: "",
  url: "",
  category: "",
  desc: "",
};
const CreateProduct = () => {
  let [createProducts, { isLoading, isSuccess }] = useCreateProductMutation();
  const { formData, handleChange, setFormData } = useGetInputValue(initialState);

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      // toastify
    }
  }, [isSuccess]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    formData.price = +formData.price
    createProducts(formData);
  };

  return (
    <div>
      <h2>CreateProduct</h2>
      <form onSubmit={handleCreateProduct} action="">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
        <input
          type="images"
          name="url"
          onChange={handleChange}
          value={formData.url}
        />
        <input
          type="text"
          name="category"
          onChange={handleChange}
          value={formData.category}
        />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={formData.desc}
        />
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
