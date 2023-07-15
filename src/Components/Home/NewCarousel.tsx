// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import slide_image_1 from "../../assets/images/img_1.jpg";
import slide_image_2 from "../../assets/images/img_2.jpg";
import slide_image_3 from "../../assets/images/img_3.jpg";
import slide_image_4 from "../../assets/images/img_4.jpg";
import slide_image_5 from "../../assets/images/img_5.jpg";
import slide_image_6 from "../../assets/images/img_6.jpg";
import slide_image_7 from "../../assets/images/img_7.jpg";
import "./carousel.css";

export default function NewCarousel() {
  return (
    <Swiper
      effect={"grab"}
      grabCursor={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img src={slide_image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_7} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
