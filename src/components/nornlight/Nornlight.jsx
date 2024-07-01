import React from "react";
import "./nornlight.scss";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import {  NORNLIGHT_ITEMS } from "../../static";

const Nornlight = () => {
  return (
    <section className="container">
      <div className="nornlight">
        <div className="nornlight__hero">
          <h2 className="nornlight__title">Каталог</h2>
          <Link className="nornlight__hero_link">
            Весь каталог
            <GoArrowRight />
          </Link>
        </div>
        <div className="nornlight__wrapper">
            {
                NORNLIGHT_ITEMS.map(el =>(
                    <div key={el.id} className="nornlight__box">
                        <div className="nornlight__item">
                            <img src={el.image} alt="" />
                        </div>
                        <h4 className="nornlight__titles">{el.title}</h4>
                        <p className="nornlight__text"> {el.desc}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Nornlight;
