import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./managecategory.scss";
import { MdOutlineCreate } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../context/api/categoryApi";
import Loading from "../../../components/loading/Loading";
import CategoryModule from "../../../components/categorymodule/CategoryModule";

const ManageCategory = () => {
  const { data: dataGetCategory, isLoading: loadingGetCategory } = useGetCategoryQuery();
  const [deleteCategory, { isLoading: loadingDeleteCategory, error, isSuccess }] = useDeleteCategoryMutation();
  const [editCategory, setEditCategory] = useState(null);



  useEffect(() => {
    if (isSuccess) {
      toast.info("Category deleted");
    } else if (error) {
      toast.error("Category could not be deleted");
    }
  }, [isSuccess, error]);

  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };

  const categoryItems = dataGetCategory?.map((el) => (
    <div key={el.id} className="category__item">
      <h3 className="category__item__title">{el.title}</h3>
      <div className="category__item__actions">
        <button
          onClick={() => setEditCategory(el)}
          className="category__item__edit__btn"
        >
          <MdOutlineCreate />
        </button>
        <button
          onClick={() => handleDeleteCategory(el.id)}
          className={`category__item__delete__btn ${loadingDeleteCategory ? "deleting__category" : ""}`}
        >
          {loadingDeleteCategory ? (
            <>Deleting <FaRegTrashAlt /></>
          ) : (
            <FaRegTrashAlt />
          )}
        </button>
      </div>
    </div>
  ));

  return (
    <>
      {loadingGetCategory && <Loading />}
      <section id="manage-category">
        <div className="manage__category">
          <h1 className="manage__category__title">Manage Category</h1>
          <div className="manage__category__wrapper">
            {categoryItems}
          </div>
        </div>
      </section>
      {editCategory && (
        <CategoryModule
          data={editCategory}
          setData={setEditCategory}
        />
      )}
    </>
  );
};

export default ManageCategory;
