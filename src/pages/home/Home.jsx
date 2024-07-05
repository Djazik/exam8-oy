import React from "react";
import Banner from "../../components/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/blog/Blog";
import Title from "../../components/title/Title";
import Products from "../../components/products/Products";

const Home = () => {

  return (
    <div>
      <Banner />
      <Catalog />
      <Nornlight />
      <Products  />
      <Brands />
      <Blog />
      <Title />
    </div>
  );
};

export default Home;
