import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
import './Slider.scss'
import 'swiper/css/navigation';

import 'swiper/css';
import "swiper/css/effect-fade";

export const Slider = ({ slides }) => {
  return (
    <div
      className="swiper-container"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        className="slider mySwiper"
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        effect={"fade"}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return (
              `<span class="${className}"></span>`
            );
          }
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];

          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].children[0].children[0].style.opacity='0';
            swiper.slides[i].children[0].children[0].style.transform='translate(100px, 100px)';
            swiper.slides[i].children[0].children[0].style.visibility='hidden';
          }

          activeSlide.children[0].children[0].style.opacity='1';
          activeSlide.children[0].children[0].style.transform='translate(0px, 0px)';
          activeSlide.children[0].children[0].style.visibility='visible';

        }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map(slide => {
          return (
            <SwiperSlide
              key={slide.id}
              className="slide slider__slide"
              style={{backgroundImage:`url(${slide.image})`}}
            >
              <div className="container slide__container">
                <div
                  className="slide__content"
                  id={slide.id}
                >
                  <div className="slide__title">{slide.title}</div>
                  <div className="slide__description">{slide.description}</div>
                  <a href="/" className="slide__button">Read More</a>
                </div>
              </div>
              
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};


