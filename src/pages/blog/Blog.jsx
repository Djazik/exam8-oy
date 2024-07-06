import React from 'react'
import { FiArrowRight } from "react-icons/fi";

import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs'
import { BLOG__ITEMS } from '../../static'

const Blog = () => {

  return (
    <section className='container' >
      <BreadCrumbs/>
      <h2 className="blog__hero__title blog__hero">Блог</h2>

      <div className="blog__wrapper blog__hero">
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

    </section>
  )
}

export default Blog