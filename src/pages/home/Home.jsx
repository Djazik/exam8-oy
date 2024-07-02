import React from "react";
import Banner from "../../components/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/blog/Blog";
import Title from "../../components/title/Title";
import Products from "../../components/products/Products";
import {
  useGetProductsQuery,
  useGetDetailProductQuery,
} from "../../context/api/productApi";

const Home = () => {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  // let {data:detail, isLoading: isDetailLoading  } = useGetDetailProductQuery(15)
  // console.log(detail)
  return (
    <div>
      {/* <Login/> */}
      <Products isAdmin={false} data={data} />
      <Banner />
      <Catalog />
      <Nornlight />
      <Brands />
      <Blog />
      <Title />
    </div>
  );
};

export default Home;
