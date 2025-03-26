"use client";

import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import PopularCategoriesCard from "../card/PopularCategoriesCard";

import "swiper/css";

const CagegorySlider = ({ popularCategory }) => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-4"
      >
        {popularCategory
          .sort((a, b) => b.recipeCount - a.recipeCount)
          .map((categoryItem) => (
            <SwiperSlide key={categoryItem?.name}>
              <PopularCategoriesCard
                key={categoryItem?.name}
                category={categoryItem}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CagegorySlider;
