import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
// import required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import ArrowCategoriesCarousel from "../buttons/arrowCategoriesCarousel";
import CategoryItem from "../categoryItem";

// Import Swiper styles
import "swiper/css";

function CategoriesCarousel(props) {
  const { categories } = props;

  const swiperCategories = useRef();

  const handleMouseEnter = useCallback(() => {
    swiperCategories?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperCategories?.current?.swiper?.autoplay?.start();
  }, []);

  const handleNext = useCallback(() => {
    swiperCategories?.current?.swiper?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperCategories?.current?.swiper?.slidePrev();
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cover_carousel_categories"
    >
      <ArrowCategoriesCarousel prev={handlePrev} next={handleNext} />

      {/* Multi Carousel FlashSale */}
      <Swiper
        ref={swiperCategories}
        slidesPerView="auto"
        spaceBetween={31}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        // loopedSlidesLimit={false}
        // loopedSlides={1}
        modules={[Autoplay]}
        className="swiper_categories"
      >
        {categories.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CategoryItem category={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategoriesCarousel;

CategoriesCarousel.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};
