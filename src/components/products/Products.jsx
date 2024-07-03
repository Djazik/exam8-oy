import React, { memo, useState } from "react";
import "./product.scss";
import { useDeleteProductMutation } from "../../context/api/productApi";
import EditModule from "../editmodule/EditModule";

const Products = ({ data, isAdmin }) => {
  const [editProduct, setEditProduct] = useState(null)
    let [deleteProduct, {isLoading}] = useDeleteProductMutation()



  let productItem = data?.map((product) => (
    <div key={product.id}>
      <img src={product.url[0]} width={200} alt="" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.desc}</p>

      {isAdmin ? (
        <>
          <button onClick={()=>deleteProduct(product.id)}>delete</button>
          <button onClick={()=> setEditProduct(product)}>edit</button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <>
      <h2>product</h2>
      {productItem}
      {
        editProduct ?  
        <EditModule data={editProduct} setData={setEditProduct}/> :
        <></>
      }
    </>
  );
};

export default memo(Products);
