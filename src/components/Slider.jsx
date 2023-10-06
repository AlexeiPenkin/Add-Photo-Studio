import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Slider.scss';

import slide_image_1 from '../img/slider-img-1.jpg';
import slide_image_2 from '../img/slider-img-2.jpg';
import slide_image_3 from '../img/slider-img-3.jpg';
import slide_image_4 from '../img/slider-img-4.jpg';
import slide_image_5 from '../img/slider-img-5.jpg';
import slide_image_6 from '../img/slider-img-6.jpg';

const Slider = () => {
    
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow"></div>
                    <div className="swiper-button-next slider-arrow"></div>
                </div>
            </Swiper>
            </div>
    )
}

export default Slider;

// ==========================================================================
        // <div>
        //     <div style={containerStyles}>
        //         <ImageSlider slides={slides} />
        //     </div>
        // </div>
// ==========================================================================
        // <div class="swiper">
        //     <div class="swiper-wrapper">
        //         <div class="swiper-slide">
        //             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide" />
        //         </div>
        //         <div class="swiper-slide">
        //             <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Slide" />
        //         </div>
        //         <div class="swiper-slide">
        //             <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Slide" />
        //         </div>
        //     </div>
        //     <div class="swiper-button-prev">
        //         <img src="./img/projects_arrow-left.svg" alt="Arrow" className="button-prev" />
        //     </div>
        //     <div class="swiper-button-next">
        //         <img src="./img/projects_arrow-next.svg" alt="Arrow" className="button-next" />
        //     </div>
        // </div>