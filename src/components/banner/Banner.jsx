import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.scss";
import { Pagination } from "swiper/modules";
import bannerImg from "../../assets/images/hero-banner1.png";


const Banner = () => {
  return (
    <div className="container">
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1 className="banner__title">
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-left">
              <h1>
                Скидка 15% <br /> на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <div className="banner-right">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;