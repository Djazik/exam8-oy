import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./blog.scss";
import { BLOG__ITEMS } from "../../static";

const Blog = () => {
  return (
    <section className="container">
      <div className="blog">
        <div className="blog__hero">
          <h2 className="blog__hero__title">Блог</h2>
          <Link to={"/blog"} className="blog__hero__link">
            Перейти в блог
            <GoArrowRight />
          </Link>
        </div>
        <div className="blog__wrapper">
          {BLOG__ITEMS.map((el) => (
            <div key={el.id} className="blog__main">
              <div className="blog__main__img">
                <img src={el.image} alt="" />
              </div>
              <div className="blog__main__item">
                <div className=" blog__main__item__top">
                  <h4 className="blog__main__title">{el.title}</h4>
                  <FiArrowRight />
                </div>
                <p className="blog__main__date">{el.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
