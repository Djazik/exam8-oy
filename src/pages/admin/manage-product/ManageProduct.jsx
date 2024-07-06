import React from "react";
import "./manageproduct.scss";
import { useGetProductsQuery } from "../../../context/api/productApi";
import ProductCart from "../../../components/productCart/ProductCart";
import Loading from "../../../components/loading/Loading";

const ManageProduct = () => {
  let { data, isLoading } = useGetProductsQuery();

 
  return (
    <>
      {isLoading && <Loading />}
      <section id="manage-product">
        <div className="container manage__product">
          <h2 className="manage__product__title">ManageProduct</h2>
          <div className="manage__product__wrapper">
            <ProductCart isAdmin={true} data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageProduct;
