import React, { memo, useState } from "react";
import { useDeleteProductMutation } from "../../context/api/productApi";
import EditModule from "../editmodule/EditModule";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { BsFillCartFill, BsFillCartCheckFill } from "react-icons/bs";
import "./productcart.scss";
import { addToHeart } from "../../context/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { MdOutlineCreate } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const ProductCart = ({ data, isAdmin, isUser }) => {
  const dispatch = useDispatch();
  let wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const [editProduct, setEditProduct] = useState(null);
  let [deleteProduct, { isLoading }] = useDeleteProductMutation();

  let productItem = data?.map((product) => (
    <div key={product.id} className="card">
      <div className="card__content">
        <div className="card__content__img">
          <img src={product.url[0]} alt="" />
        </div>
        <p className="card__category">{product.category}</p>
        <h3 className="card__title">{product.title}</h3>
        <div className="card__bottom">
          <div className="card__price">
            <del className="old__price">{product.oldprice}₽</del>
            <p className="price">{product.price}₽</p>
          </div>
          {isUser ? (
            <>
              <button
                className="card__add"
                onClick={() => dispatch(addToCart(product))}
              >
                {cart?.some((item) => item.id === product.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartFill />
                )}
              </button>
              <button
                onClick={() => dispatch(addToHeart(product))}
                className="card__like__btn"
              >
                {wishlist?.some((item) => item.id === product.id) ? (
                  <FaHeart className="heart__liked" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </>
          ) : (
            <></>
          )}
        
        </div>
        <div className="change__btn">
            {isAdmin ? (
              <>
                <button className="change__btn__delete" onClick={() => deleteProduct(product.id)}>
                  <FaRegTrashAlt />
                </button>
                <button onClick={() => setEditProduct(product)}>
                  <MdOutlineCreate />
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="card__wrapper">
        {productItem}
        {editProduct ? (
          <EditModule data={editProduct} setData={setEditProduct} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default memo(ProductCart);
