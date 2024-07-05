import React, { memo, useState } from "react";
import "./product.scss";
import ProductCart from "../productCart/ProductCart";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Products = () => {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  const [productLimit, setProductLimit] = useState(4);
  let { data: dataCategory } = useGetCategoryQuery();
  // const [categoryValue, setCategoryValue] = useState("")

  const handleSeeMore = () => {
    setProductLimit((prevLimit) => prevLimit + 4);
  };
  return (
    <section className=" container">
      <div className="products">
        <div className="products__header">
          <h3 className="products__title">Популярные товары</h3>
          <Link className="products__header__link">
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
              <button
                // onClick={() => setCategoryValue(el.title)}
                className="products__categories__btn"
              >
                {el.title}
              </button>
            </li>
          ))}
        </ul>
        <select
          // value={categoryValue}
          // onChange={(e) => setCategoryValue(e.target.value)}
          name=""
          id=""
          className="products__category__select"
        >
          <option value="">All</option>
          {dataCategory?.map((el) => (
            <option key={el.id} value={el.title}>
              {el.title}
            </option>
          ))}
        </select>

        <ProductCart
          isUser={true}
          isAdmin={false}
          data={data?.slice(0, productLimit)}
        />
        {data && productLimit < data.length && (
          <button className="products__see__more__btn" onClick={handleSeeMore}>
            See more
          </button>
        )}
      </div>
    </section>
  );
};

export default memo(Products);
