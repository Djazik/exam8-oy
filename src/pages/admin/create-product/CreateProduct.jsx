import React, { useEffect } from "react";
import "./createproduct.scss";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import {
  useCreateProductMutation,
  useGetCategoryQuery,
} from "../../../context/api/productApi";

import { toast } from "react-toastify";

const initialState = {
  title: "",
  price: "",
  oldprice: "",
  url: "",
  category: "",
  desc: "",
};
const CreateProduct = () => {
  let [createProducts, { isLoading, isSuccess }] = useCreateProductMutation();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const { data } = useGetCategoryQuery();

  let categoryItem = data?.map((el) => <option key={el.id}>{el.title}</option>);

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      toast.success("Product created successfully")
    }
  }, [isSuccess]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    formData.price = +formData.price;
    createProducts(formData);
  };

  return (
    <>
      <section id="create__product">
        <div className="create__product">
          <form
            onSubmit={handleCreateProduct}
            action=""
            className="create__product__box"
          >
            <h2>Create Product</h2>
            <div className="create__product__inp__box">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                required
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                className="create__product__input"
              />
            </div>
            <div className="create__product__inp__box">
              <label htmlFor="Price">Price</label>
              <input
                id="price"
                required
                type="number"
                name="price"
                onChange={handleChange}
                value={formData.price}
                className="create__product__input"
              />
            </div>
            <div className="create__product__inp__box">
              <label htmlFor="old Price">old Price</label>
              <input
                id="old price"
                required
                type="number"
                name="oldprice"
                onChange={handleChange}
                value={formData.oldprice}
                className="create__product__input"
              />
            </div>
            <div className="create__product__inp__box">
              <label htmlFor="image">Image - Url</label>
              <input
                id="image"
                required
                type="images"
                name="url"
                onChange={handleChange}
                value={formData.url}
                className="create__product__input"
              />
            </div>
            <div className="create__product__inp__box">
              <label htmlFor="Category">Category</label>
              <select
                id="Category"
                required
                type="text"
                name="category"
                onChange={handleChange}
                value={formData.category}
                className="create__product__input"
              >
                <option value="Tanlang">Tanlang</option>
                {categoryItem}
              </select>
            </div>
            <textarea
              required
              onChange={handleChange}
              value={formData.desc}
              placeholder="Description"
              className='create__product__input'
              name="desc"
              id=""
              cols="30"
              rows="4"
            ></textarea>

            <button className="create__product__btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Create"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateProduct;
