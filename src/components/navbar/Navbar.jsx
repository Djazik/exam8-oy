import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

import antena from "../../assets/images/antena.svg";
import logo from "../../assets/images/nav-logo.svg";
import NavbarMenu from "./nav-menu/NavbarMenu";
import "./Navbar.scss";
import HeaderSearch from "../header/header-search/HeaderSearch";
import { useEffect, useState } from "react";
const Navbar = () => {
  const cart = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wishlist.value);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${isScrolled ? "fixed" : ""} navbar-container`}>
      <div className="navbar container">
        <NavbarMenu />
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
        <div className="navbar-hide-search">
          <HeaderSearch />
        </div>

        <div className="navbar__actions">
          <NavLink to="/wishlist" className="navbar__actions__item">
            <FaRegHeart />
            <p className="navbar-link-text">Избранное</p>

            {wishlist.length > 0 ? (
              <span className="wishlist__length">{wishlist.length}</span>
            ) : null}
          </NavLink>

          <NavLink to="" className="navbar__actions__item">
            <img src={antena} alt="" />
            <p className="navbar-link-text">Сравнение</p>
          </NavLink>

          <NavLink to="/cart" className="navbar__actions__item">
            <FiShoppingCart />
            <p className="navbar-link-text">Корзина</p>
            {cart.length > 0 ? (
              <span className="cart__length">{cart.length}</span>
            ) : null}
          </NavLink>
        </div>
      </div>
      <div className="navbar-show-search">
        <HeaderSearch />
      </div>
    </nav>
  );
};

export default Navbar;
