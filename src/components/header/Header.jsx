import "./header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/nav-logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

import antena from "../../assets/images/antena.svg";

const Header = () => {
  return (
    <div className="container header">
      <div className="hero__nav">
        <div className="nav__link">
          <ul className="nav__link__ul">
            <NavLink className="nav__link__item" to={"/company"}>
              О компании
            </NavLink>
            <NavLink className="nav__link__item" to={"/delivery"}>
              Доставка и оплата
            </NavLink>
            <NavLink className="nav__link__item" to={"/return"}>
              Возврат
            </NavLink>
            <NavLink className="nav__link__item" to={"/garant"}>
              Гарантии
            </NavLink>
            <NavLink className="nav__link__item" to={"/contact"}>
              Контакты
            </NavLink>
            <NavLink className="nav__link__item" to={"/blog"}>
              Блог
            </NavLink>
          </ul>
          <div className="nav__item">
            <p>8 (800) 890-46-56</p>
            <p>Заказать звонок</p>
          </div>
        </div>

        <div className="navbar">
          <div className="navbar__logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
              <p>
                NORN<span>LIGHT</span>
              </p>
            </NavLink>
          </div>

          <button className="navbar__catalog">
            <HiOutlineMenuAlt1 />
            <p>Каталог</p>
          </button>

          <div className="navbar__search">
            <input
              type="text"
              className="navbar__search__input"
              placeholder="Поиск по товарам"
            />
            <button className="navbar__search__btn">
              <IoSearch />
            </button>
          </div>

          <div className="navbar__actions">
            <NavLink to="" className="navbar__actions__item">
              <FaRegHeart />
              <p>Избранное</p>
              {/* <span className="wishlist__length">{wishlist.length}</span> */}
            </NavLink>

            <NavLink to="" className="navbar__actions__item">
              <img src={antena} alt="" />
              <p>Сравнение</p>
            </NavLink>

            <NavLink to="/cart" className="navbar__actions__item">
              <FiShoppingCart />
              <p>Корзина</p>
              {/* <span>{cart.length}</span> */}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
