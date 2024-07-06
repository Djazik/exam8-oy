import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./catalog.scss";
import { CATALOG_ITEMS } from "../../static";
import CatalogCard from "../card/catalog-card/CatalogCard";
import CatalogCardSlider from "../card/catalog-card/CatalogCardSlider";

const Catalog = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="catalog">
      <div className="catalog__wrapper container">
        <div className="catalog__hero">
          <h2 className="catalog__title">Каталог</h2>
          <Link className="catalog__hero_link" to={"/catalog"}>
            Весь каталог
            <GoArrowRight />
          </Link>
        </div>
        <div className="catalog__main">
          {CATALOG_ITEMS.map((el) => (
            <CatalogCard key={el.id} title={el.title} image={el.image} />
          ))}
        </div>
        <div className="catalog-slider_container">
        <Slider {...settings} className="catalog-slider">
            {CATALOG_ITEMS.map((el) => (
              <CatalogCardSlider key={el.id} {...el} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
