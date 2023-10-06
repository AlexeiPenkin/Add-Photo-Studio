import React, { useState } from 'react';
import PricingModal from './PricingModal';
import './Pricing.scss';

const Pricing = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className="pricing" id="pricing">
                <h2 className="pricing__heading">Стоимость фотосесии</h2>
                <div className="pricing__cards">
                    <div className="pricing__card pricing__card-mini">
                        <div className="pricing__card-wrap">
                            <h3>MINI</h3>
                            <p className="price">2500 <span>₽</span></p>
                            <span className="location">/ 1 локация</span>
                            <div className="options">
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Длительность - 30 минут</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Исходники - до 100 штук</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Ретушь - 4 фото</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Аренда фотостудии - Бесплатно</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Любой образ</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-block">
                            <div className="add-services">
                                <h4>Дополнительные услуги</h4>
                                <div className="items">
                                    <div className="item item-1">
                                        Помощь<br></br>в позировании
                                    </div>
                                    <div className="item item-2">
                                        Визажист + 2000 ₽
                                    </div>
                                    <div className="item item-3" onClick={() => setShowModal(true)}>
                                        Дополнительная ретушь<br></br>фото - 1 шт./250 ₽
                                    </div>
                                </div>
                            </div>
                            <div className="pricing__card-btn">
                                <a href="#!" className="card-btn-link">
                                    Забронировать
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing__card pricing__card-standard">
                        <div className="pricing__card-wrap">
                            <h3>STANDARD</h3>
                            <p className="price">5000 <span>₽</span></p>
                            <span className="location">/ 2 локации</span>
                            <div className="options">
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Длительность - 30 минут</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Исходники - до 100 штук</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Ретушь - 4 фото</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Аренда фотостудии - Бесплатно</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Любой образ</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-block">
                            <div className="add-services">
                                <h4>Дополнительные услуги</h4>
                                <div className="items">
                                    <div className="item item-1">
                                        Помощь<br></br>в позировании
                                    </div>
                                    <div className="item item-2">
                                        Визажист + 2000 ₽
                                    </div>
                                    <div className="item item-3" onClick={() => setShowModal(true)}>
                                        Дополнительная ретушь<br></br>фото - 1 шт./250 ₽
                                    </div>
                                </div>
                            </div>
                            <div className="pricing__card-btn">
                                <a href="#!" className="card-btn-link">
                                    Забронировать
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing__card pricing__card-maxi">
                        <div className="pricing__card-wrap">
                            <h3>MAXI</h3>
                            <p className="price">N <span>₽</span></p>
                            <span className="location">/ Максимальное количество локаций</span>
                            <div className="options">
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Длительность - 4 часа</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Исходники - до 500 штук</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Ретушь - 50фото</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Аренда фотостудии - Бесплатно</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Визажист - Make-Up, Укладка</span>
                                </div>
                                <div className="option">
                                    <img src="./img/pricing-option-checkbox.svg" alt="Checkbox" />
                                    <span>Предварительный подбор образов — до 8 образов</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-block">
                            <div className="add-services">
                                <h4>Дополнительные услуги</h4>
                                <div className="items">
                                    <div className="item item-3" onClick={() => setShowModal(true)}>
                                        Дополнительная ретушь<br></br>фото - 1 шт./250 ₽
                                    </div>
                                </div>
                            </div>
                            <div className="pricing__card-btn">
                                <a href="#!" className="card-btn-link">
                                    Забронировать
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && 
                <PricingModal handleClose={handleClose} />
            }
        </>
    )
}

export default Pricing;