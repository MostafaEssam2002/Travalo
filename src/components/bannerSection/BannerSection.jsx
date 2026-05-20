import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideBanner from '../slideBanner/SlideBanner'
import ArrowsBanner from './../arrowsBanner/ArrowsBanner';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const BannerSection = () => {
    const pagination = {
        clickable: true,
        el: '.swiper-pagination',
        renderBullet: function (index, className) {
            return '<span class="'+className+'">'+0+(index + 1)+'</span>';
        }
    }
    // ساعه و اتناشر
    const data = [
        {id:Math.random().toString(),title:"Slide 1",sub_title:"Slide 1 Sub Title",image_path:"https://img.magnific.com/free-photo/stony-beach-landscape_23-2151716355.jpg?t=st=1725502848~exp=1725506448~hmac=aa57dc9bfb890a8f972f851ede1cdc04ff289629987fccda6e72c60ed7f4af5a&w=996%22"},
        {id:Math.random().toString(),title:"Slide 2",sub_title:"Slide 2 Sub Title",image_path:"https://img.magnific.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243975.jpg?w=740&q=80"},
        {id:Math.random().toString(),title:"Slide 3",sub_title:"Slide 3 Sub Title",image_path:"https://img.magnific.com/premium-photo/abstract-uv-ultraviolet-light-composition_23-2149243985.jpg?w=1480"}
    ]
    return (
        <div className="banner_section">
            <Swiper modules={[Autoplay,Navigation,Pagination]} navigation={{nextEl:".arrows_banner_rightArrow",prevEl:".arrows_banner_leftArrow"}} pagination={pagination}>
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <SlideBanner title={item.title} sub_title={item.sub_title} image_path={item.image_path}/>
                    </SwiperSlide>
                ))}
            
            </Swiper>
            <div className="swiper-pagination"></div>
            <ArrowsBanner/>
        </div>
    )
}

export default BannerSection