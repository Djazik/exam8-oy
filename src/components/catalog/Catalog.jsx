import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./catalog.scss";
import { CATALOG_ITEMS } from "../../static";

const Catalog = () => {
  return (
    <section className="catalog ">
      <div className="catalog__wrapper container">
        <div className="catalog__hero">
          <h2 className="catalog__title">Каталог</h2>
          <Link className="catalog__hero_link">
            Весь каталог
            <GoArrowRight />
          </Link>
        </div>
        <div className="catalog__main">
          {CATALOG_ITEMS.map((el) => (
            <div key={el.id} className="catalog__box">
              <div className="catalog__item">
                <p className="catalog__title">{el.title}</p>
                <NavLink className="catalog__link">
                  От 540₽
                  <GoArrowRight />
                </NavLink>
              </div>
              <img src={el.image} alt={el.title} className="catalog__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
