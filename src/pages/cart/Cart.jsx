  import React, { memo } from "react";
import "./cart.scss";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";

import { FaRegTrashCan } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decCart,
  incCart,
  removeFromCart,
} from "../../context/slices/cartSlice";
import { toast } from "react-toastify";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import Empty from "../../components/empty/Empty";

const BOT_TOKEN = "7201229196:AAHiQ92sQtT-WyXTXCkW7H9RSjMkRVxTwTs";
const CHAT_ID = "-4235601750";

const initialState = {
  title: "",
  phone: "",
  email: "",
  address: "",
  desc: "",
};

const Cart = () => {
  const { formData, handleChange } = useGetInputValue(initialState);

  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  let totalPrice = cart?.reduce((a, b) => a + b.price * b.quantity, 0);


  const handleOrder = (e) => {
    e.preventDefault();
    let text = "Buyurtma %0A%0A";
    text += `Ismi Familyasi: ${formData.title} %0A`;
    text += `Email: ${formData.email} %0A`;
    text += `Telefon: ${formData.phone} %0A`;
    text += `Address: ${formData.address} %0A%0A`;

    let quantity = 1;
    cart.forEach((el) => {
      text += `<b>Maxsulot: ${quantity}</b> %0A%0A`;
      text += `Nomi: ${el.title} %0A`;
      text += `Miqdori: ${el.quantity} %0A`;
      text += `Narxi: ${el.price} %0A%0A`;
      quantity++;
    });

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    toast.success("Buyurtma qabul qilindi, tez orada siz bilan bog'lanamiz");
    dispatch(clearCart());
    window.scrollTo(0, 0);
  };

  return (
    <>
      {cart.length ? (
        <section id="cart">
          <div className="container cart">
            <BreadCrumbs />
            <h2 className="cart__title">
              Корзина
              <span className="cart__title__length">{cart.length}</span>
            </h2>

            <div className="cart__table">
              <div className="cart__table__header">
                <p>Фото</p>
                <p>Товары</p>
                <p>Описание</p>
                <p>Артикул</p>
                <p>Количество</p>
              </div>

              <div className="cart__table__wrapper">
                {cart?.map((el) => (
                 
                   <div key={el.id} className="cart__table__item">
                   <div className="cart__table__frame">
                       <img src={el.image} className='cart__table__item__img' alt="" />
                   </div>
                   <div className="cart__table__first__col">
                       <p className='cart__table__item__title'>{el.title}</p>
                       <p className='cart__table__item__price'>
                           {el.price * el.quantity}₽
                       </p>
                   </div>
                   <p className="cart__table__description">{el.desc}</p>
                   <p className="cart__table__articul">
                       RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                   </p>
                   <div className="cart__table__count__box">
                       <button disabled={el.quantity === 1} onClick={() => dispatch(decCart(el))} className="cart__table__count__minus">-</button>
                       <span className="cart__table__count__number">{el.quantity}</span>
                       <button onClick={() => dispatch(incCart(el))} className="cart__table__count__plus">+</button>
                   </div>
                   <button onClick={() => dispatch(removeFromCart(el))} className="cart__table__delete__btn">
                       <FaRegTrashCan />
                   </button>
               </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleOrder} className="cart__form">
              <div className="cart__order">
                <h3 className="cart__form__title">Оформление</h3>
                <div className="cart__order__header">
                  <input
                    required
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="ФИО"
                  />
                  <input
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    placeholder="телефон"
                  />
                  <input
                    required
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="Электронная почта"
                  />
                </div>

                <div className="cart__order__delivery">
                  <h3 className="cart__form__title">Доставка</h3>
                  <input
                    required
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    name="address"
                    placeholder="Адрес доставки"
                  />
                  <textarea
                    required
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="Комментарий"
                    name="desc"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="cart__payment">
                <h3 className="cart__form__title">Оплата</h3>
                <div className="cart__payment__header">
                  <div className="cart__payment__header__item">
                    <p>Товары</p>
                    <p>{totalPrice}₽</p>
                  </div>
                  <div className="cart__payment__header__item">
                    <p>Доставка</p>
                    <p>580₽</p>
                  </div>
                </div>
                <p className="cart__payment__total__price">{totalPrice}₽</p>

                <div className="cart__payment__bottom">
                  <button type="submit" className="cart__payment__buy__btn">
                    Купить
                  </button>
                  <p>
                    <SiTicktick />Я согласен наобработку моих персональных
                    данных
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default memo(Cart);
