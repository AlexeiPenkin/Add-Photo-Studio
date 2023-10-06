import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import './Locations.scss';

import slide_image_1 from '../img/locations-img-1.jpg';
import slide_image_2 from '../img/locations-img-2.jpg';
import slide_image_3 from '../img/locations-img-3.jpg';
import slide_image_4 from '../img/locations-img-4.jpg';
import slide_image_5 from '../img/locations-img-5.jpeg';
import slide_image_6 from '../img/locations-img-6.jpeg';

const Locations = () => {
    
    return (

        <div className='locations'>
            <h2 className="projects__heading">Наши локации</h2>
            <div className="slide-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={27}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    fade={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="slide-container"
                >
                    <div className="card-wrapper swiper-wrapper">
                        <SwiperSlide>
                            <img src={slide_image_1} alt="Slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_2} alt="Slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_3} alt="Slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_4} alt="Slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_5} alt="Slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_6} alt="Slide" />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>

            <div className="swiper-button swiper-button-next">
                <img src="./img/projects_arrow-right.svg" alt="Arrow" />
            </div>
            <div className="swiper-button swiper-button-prev">
                <img src="./img/projects_arrow-left.svg" alt="Arrow" />
            </div>

            <div className="locations__btn">
                <a href="#!" className="locations__btn-link">
                    Выбрать локацию
                </a>
            </div>
        </div>
    )
}

export default Locations;