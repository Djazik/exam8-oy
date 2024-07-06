import "./header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className=" header">
      <div className="hero__nav container">
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
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
