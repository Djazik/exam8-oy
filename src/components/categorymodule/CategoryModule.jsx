import React, { useEffect } from "react";
import "./categorymodule.scss";
import { useUpdateCategoryMutation } from "../../context/api/categoryApi";
import { IoCloseSharp } from "react-icons/io5";

const CategoryModule = ({ setData, data }) => {
  const [updateCategory, { isLoading, isSuccess }] = useUpdateCategoryMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(null);
    }
  }, [isSuccess, setData]);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    let newCategory = {
      title: data.title,
    };
    updateCategory({ body: newCategory, id: data.id });
  };

  return (
    <>
      <div
        onClick={() => setData(null)}
        className={`edit__category__overlay ${data ? "show__edit__category__overlay" : ""}`}
      ></div>

      <form
        onSubmit={handleUpdateCategory}
        className={`edit__category__box ${data ? "show__edit__category__box" : ""}`}
      >
        <button onClick={() => setData(null)} type='button' className="edit__category__box__close__btn">
          <IoCloseSharp />
        </button>
        <label htmlFor="category">Category</label>
        <input
          value={data?.title || ""}
          onChange={(e) => setData((prev) => ({ ...prev, title: e.target.value }))}
          id='category'
          type="text"
        />
        <button
          disabled={isLoading}
          className={`edit__category__box__update__btn ${isLoading ? "updating__category" : ""}`}
          type="submit"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </>
  );
};

export default CategoryModule;
