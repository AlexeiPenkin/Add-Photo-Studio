import React, { useEffect, useRef } from 'react'; 
import './Feedback.scss';

import { register } from "swiper/element/bundle";
register();

const Feedback = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        slidesPerView: 3,
        spaceBetween: 16,
        navigation: true,

        injectStyles: [
            `
                .swiper {
                    width: 1052px;
                }
            
                .swiper-button-next,
                .swiper-button-prev {
                  background-color: white;
                  background-position: center;
                  background-size: 40px;
                  background-repeat: no-repeat;
                  padding: 8px 16px;
                  border-radius: 100%;
                  color: #E97522;
                  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15));
                  z-index: 100;
                }

                .swiper-button-next:active,
                .swiper-button-prev:active {
                    background-color: #E97522 !important;
                    color: #fff !important;
                }
                            
                .swiper-button-next::after,
                .swiper-button-prev::after {
                    content: "";
                }
                }
            `,
          ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    return (
        <div className="feedback" id="feedback">
            <h2 className="feedback__heading">
                Отзывы
            </h2>

            <swiper-container ref={swiperRef} init="false" className="swiper-container">
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-1.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Мария</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-2.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Сергей</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-3.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Руслан</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-1.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Анна</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-2.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Алексей</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="swiper-slide">
                    <div className="swiper-slide-wrap">
                        <div className="slide-photo">
                            <img src="./img/feedback-slider-img-3.jpg" alt="CustomerPhoto" className="photo" />
                        </div>
                        <p className="name">Вова</p>
                        <p className="text">
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.
                        </p>
                        <div className="show-more">
                            <a href="#!" className="show-more-link">Показать ещё</a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>

    )
}

export default Feedback;