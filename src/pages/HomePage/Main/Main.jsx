// Seac1.js
import React, { useRef, useState, useEffect } from "react";
import "./Main.scss";
import mainImg1 from "../../../assets/main-img1.svg";
import mainImg2 from "../../../assets/main-img2.svg";
import mainImg3 from "../../../assets/main-img3.svg";
import mainImg4 from "../../../assets/main-img4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

const Seac1 = () => {
  return (
    <div className="container">
      <section className="seac1">
        <div>
          <div className="seac1__head">
            <h2>ЛЕЧЕНИЕ ЗУБОВ ДЛЯ ВСЕЙ СЕМЬИ</h2>
            <p>Без боли и слёз, в рассрочку <br /> и с гарантией до 1 года</p>
          </div>
          <div className="seac1__slide">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={mainImg1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mainImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mainImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mainImg4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seac1;
