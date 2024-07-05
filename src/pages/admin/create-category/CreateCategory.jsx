import React, { useEffect } from "react";
import "./createcategory.scss";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import { useGetInputValue } from "../../../hooks/useGetInputValue";
import { toast } from "react-toastify";

const initialState = {
  title: "",
};
const CreateCategory = () => {
  const [CreateCategory, { data, isLoading, isSuccess }] =
    useCreateCategoryMutation();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  
  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
      toast.success("Product created successfully")
    }
  }, [isSuccess]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    CreateCategory(formData);
  };
  return (
    <>
      <section id="create-category">
        <div className="create__category">
          <h2 className="create__category__title">Create Category</h2>
          <form
            onSubmit={handleCreateProduct}
            className="create__category__form"
          >
            <input
              required
              name="title"

              onChange={handleChange}
              value={formData.title}
              type="text"
              placeholder="Category Name"
            />
            <button
              disabled={isLoading ? true : false}
              className={`create__category ${
                isLoading ? "creating__category" : ""
              }`}
              type="submit"
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateCategory;
