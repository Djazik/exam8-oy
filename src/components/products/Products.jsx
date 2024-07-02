import React, { memo } from "react";
import "./product.scss";
import { useDeleteProductMutation } from "../../context/api/productApi";

const Products = ({ data, isAdmin }) => {

    let [deleteProduct, {isLoading}] = useDeleteProductMutation()

    const handleDeleteProduct = (id)=>{
        deleteProduct(id)
    }

  let productItem = data?.map((product) => (
    <div key={product.id}>
      <img src={product.url[0]} width={200} alt="" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.desc}</p>

      {isAdmin ? (
        <>
          <button onClick={()=> handleDeleteProduct(product.id)}>delete</button>
          <button>edit</button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <div>
      <h2>product</h2>
      {productItem}
    </div>
  );
};

export default memo(Products);
