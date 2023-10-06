import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './FeedbackForm.scss';

const FeedbackForm = () => {

    return (
        <div className='feedback-form'>
            <div className="feedback-form__wrap">
                <YMaps
                    query={{
                        ns: "use-load-option",
                        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
                    }}
                >
                    <div className="section-map">
                        <div className="map" id="map">
                            <Map
                                width="40.56rem"
                                height="33.8125rem"
                                defaultState={{
                                center: [55.000698, 83.006531],
                                zoom: 9,
                                controls: ["zoomControl", "fullscreenControl"],
                                }}
                            >
                                <Placemark
                                defaultGeometry={[55.000698, 83.006531]}
                                properties={{
                                    balloonContentBody:
                                    "This is balloon loaded by the Yandex.Maps API module system",
                                }}
                                />
                            </Map>
                        </div>
                    </div>
                </YMaps>
                <div className="form-box">
                    <div className="form-box__wrap">
                        <h2 className="feedback-form__heading">
                            Форма обратной связи
                        </h2>
                        <fieldset className="feedback-form__fieldset">
                            <div className="input-form">
                                <span>Имя</span>
                                <input type="text" placeholder="Введите ваше имя" />
                            </div>
                            <div className="input-form">
                                <span>E-mail</span>
                                <input type="e-mail" placeholder="Введите ваш e-mail" />
                            </div>
                            <div className="input-form">
                                <span>Телефон</span>
                                <input type="tel" placeholder="Введите ваше телефон" />
                            </div>
                        </fieldset>
                        <div className="feedback-form__btn">
                            <a href="#!" className="feedback-form__btn-link">
                                Приобрести
                            </a>
                        </div>
                        <p className="feedback-form__disclaimer">
                            Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с <span className="disclaimer__span">политикой конфиденциальности</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm;