import React, { useEffect } from "react";
import "./wishlist.scss";
import { useSelector } from "react-redux";
import ProductCart from "../../components/productCart/ProductCart";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    {
    wishlist.length ? 
    <ProductCart data={wishlist}/>
    : <Empty />
  }
  </div>;
};

export default Wishlist;
