import React, { memo } from "react";
import "./product.scss";
import ProductCart from "../productCart/ProductCart";
import { useGetProductsQuery } from "../../context/api/productApi";


const Products = () => {
  let { data, isLoading, error, isError } = useGetProductsQuery();

  return (
    <>
      <ProductCart isUser={true} isAdmin={false} data={data}/>
    </>
  );
};

export default memo(Products);
