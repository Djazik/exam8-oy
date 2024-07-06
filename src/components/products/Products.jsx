import React, { memo, useState } from "react";
import "./product.scss";
import ProductCart from "../productCart/ProductCart";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Loading from "../loading/Loading";
import Productsee from "./Productsee";

const Products = () => {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  const [productLimit, setProductLimit] = useState(4);
  let { data: dataCategory } = useGetCategoryQuery();

  const handleSeeMore = () => {
    setProductLimit((prevLimit) => prevLimit + 4);
  };
  return (
    <section className=" container">
      <div className="products">
        <div className="products__header">
          <h3 className="products__title">Популярные товары</h3>
          <Link to={"/all-products"} className="products__header__link">
            Все товары
            <GoArrowRight />
          </Link>
        </div>
        <ul className="products__categories">
          <li className="products__categories__item">
            <button
              onClick={() => setCategoryValue("")}
              className="products__categories__btn"
            >
              All
            </button>
          </li>
          {dataCategory?.map((el) => (
            <li key={el.id} className="products__categories__item">
              <button className="products__categories__btn">{el.title}</button>
            </li>
          ))}
        </ul>
        <select name="" id="" className="products__category__select">
          <option value="">All</option>
          {dataCategory?.map((el) => (
            <option key={el.id} value={el.title}>
              {el.title}
            </option>
          ))}
        </select>
        {isLoading ? (
          <Loading />
        ) : (
          <ProductCart
            isUser={true}
            isAdmin={false}
            data={data?.slice(0, productLimit)}
          />
        )}
        <Productsee
          handleSeeMore={handleSeeMore}
          data={data}
          productLimit={productLimit}
        />
      </div>
    </section>
  );
};

export default memo(Products);
