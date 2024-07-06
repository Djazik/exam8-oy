import React, { memo, useState } from "react";
import { useDeleteProductMutation } from "../../context/api/productApi";
import EditModule from "../editmodule/EditModule";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import "./productcart.scss";
import { addToHeart } from "../../context/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decCart, incCart } from "../../context/slices/cartSlice";
import { MdOutlineCreate } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCart = ({ data, isAdmin, isUser }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  let productItem = data?.map((product) => {
    const addCartProduct = cart?.find((pr) => pr.id === product.id);

    return (
      <div key={product.id} className="card">
        <div className="card__content">
          <Link to={`/single-product/${product.id}`} className="card__content__img">
            <img src={product.url} alt="" />
          </Link>

          <p className="card__category">{product.category}</p>
          <h3 className="card__title">{product.title}</h3>
          <div className="card__bottom">
            <div className="card__price">
              <del className="old__price">{product.oldprice}₽</del>
              <p className="price">{product.price}₽</p>
            </div>
            {isUser && (
              <>
                {addCartProduct ? (
                  <div className="card__count__box">
                    <button
                      onClick={() => {
                        dispatch(decCart(addCartProduct));
                        if (addCartProduct.quantity === 1) {
                          dispatch(removeFromCart(addCartProduct));
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{addCartProduct?.quantity}</span>
                    <button onClick={() => dispatch(incCart(addCartProduct))}>
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="card__count__btn"
                  >
                    В корзину
                  </button>
                )}
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
            )}
          </div>
          {isAdmin && (
            <div className="change__btn">
              <button
                className="change__btn__delete"
                onClick={() => deleteProduct(product.id)}
                disabled={isLoading}
              >
                <FaRegTrashAlt />
              </button>
              <button onClick={() => setEditProduct(product)}>
                <MdOutlineCreate />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="card__wrapper">
        {productItem}
        {editProduct && <EditModule data={editProduct} setData={setEditProduct} />}
      </div>
    </div>
  );
};

export default memo(ProductCart);
