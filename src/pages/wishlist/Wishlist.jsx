import React, { useEffect } from "react";
import "./wishlist.scss";
import { useSelector } from "react-redux";
import ProductCart from "../../components/productCart/ProductCart";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    {
    wishlist.length ? 
    <ProductCart data={wishlist}/>
    : <><h2>empty</h2></>
  }
  </div>;
};

export default Wishlist;
