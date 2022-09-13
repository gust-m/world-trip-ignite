import { Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Lazy } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { CarrouselItem } from './CarrouselItem';

export const Carrousel = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#FFBA08',
          '--swiper-pagination-color': '#FFBA08',
          cursor: 'pointer',
        }}
        lazy={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Lazy, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarrouselItem
            continent="América do Norte"
            description="Muitos lugares turísticos."
            src="https://images.unsplash.com/photo-1571201674677-83e444d0ae20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarrouselItem
            continent="América do Sul"
            description="Lugares perigosos e bonitos."
            src="https://images.unsplash.com/photo-1629305712965-da29bcb7e7a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            continent="Ásia"
            description="Um cultura diferente."
            src="https://images.unsplash.com/photo-1613450837305-3e07518a63c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            continent="África"
            description=" Paisagens de tirar o fôlego."
            src="https://images.unsplash.com/photo-1525945995886-0ede2bd49ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            continent="Europa"
            description="O continente mais antigo."
            src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            continent="Oceania"
            description="Lugares e experiências incríveis."
            src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
