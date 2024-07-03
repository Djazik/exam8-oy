import React, { useEffect } from "react";
import "./editmodule.scss";
import { useUpdateProductMutation } from "../../context/api/productApi";

const EditModule = ({ setData, data }) => {
  let [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();

    useEffect(()=>{
        if(isSuccess){
            setData(null)
        }
    },[isSuccess])

  const handleUpdateProduct = e => {
    e.preventDefault();
    let newProduct = {
      title: data.title,
      price: data.price,
      desc: data.desc,
      url: data.url,
      category: data.category
    };
    updateProduct({ body: newProduct, id: data.id });
  };
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overlay"></div>
      <form onSubmit={handleUpdateProduct} className="edit__wrapper">
        <h2>Update Product</h2>
        <input
          value={data.title}
          onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
          type="text"
        />
        <input
          value={data.price}
          onChange={(e) => setData((p) => ({ ...p, price: e.target.value }))}
          type="text"
        />
        <input
          value={data.url}
          onChange={(e) => setData((p) => ({ ...p, url: e.target.value }))}
          type="text"
        />
        <input
          value={data.desc}
          onChange={(e) => setData((p) => ({ ...p, desc: e.target.value }))}
          type="text"
        />
        <input
          value={data.category}
          onChange={(e) => setData((p) => ({ ...p, category: e.target.value }))}
          type="text"
        />

        <button disabled={isLoading}>{isLoading ? "Loading..." : "Save"}</button>
        <button type="button" onClick={() => setData(null)}>
          Cencel
        </button>
      </form>
    </>
  );
};

export default EditModule;
