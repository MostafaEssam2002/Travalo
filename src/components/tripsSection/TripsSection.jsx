import React from 'react'
import HeaderSection from './../headerSection/HeaderSection';
import TripsCard from './../tripsCard/TripsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TripsSection = () => {
  return (
    <div className='trips_section x_padding y_padding' >
      <HeaderSection title={"The Trips"}/>
      <div className="trips_section_container">
        <Swiper breakpoints={{
          768:{
            slidesPerView:2
          },
          1024:{
            slidesPerView:2.2
          },
          1250:{
            slidesPerView:3
          },
          1440:{
            slidesPerView:3.2
          },
        }}  spaceBetween={30} slidesPerView={1.1}>
          <SwiperSlide >
            <TripsCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TripsCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TripsCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TripsCard/>
          </SwiperSlide>
          <SwiperSlide >
            <TripsCard/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default TripsSection