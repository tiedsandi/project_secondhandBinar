import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

const ImageSlider = () => {
  const img = useSelector((state) => state.product.img);

  return (
    <Swiper
      data-testid="image-slider"
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {img.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <img src={image.picture} alt="gambar product" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
