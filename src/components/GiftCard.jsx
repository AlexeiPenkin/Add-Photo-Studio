import React, { useState } from 'react';
import IntroModal from './IntroModal';
import './GiftCard.scss';

const GiftCard = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className='gift-card'>
                <h2 className="gift-card__heading">
                    Подарочный сертификат на фотосессию
                </h2>
                <div className="gift-card__wrap">
                    <div className="gift-card__info">
                        <span>СЕРТИФИКАТ НА ФОТОСЕССИЮ</span>
                        <h2>Это подарок, который западает<br></br>в душу</h2>
                        <div className="gift-card__options">
                                <div className="gift-card__option gift-card__option-1">
                                    <img src="./img/gift-card-checkbox.svg" alt="Checkbox" />
                                    <span>Креативное оформление</span>
                                </div>
                                <div className="gift-card__option gift-card__option-2">
                                    <img src="./img/gift-card-checkbox.svg" alt="Checkbox" />
                                    <span>Открытый календарь</span>
                                </div>
                                <div className="gift-card__option gift-card__option-3">
                                    <img src="./img/gift-card-checkbox.svg" alt="Checkbox" />
                                    <span>Всё включено</span>
                                </div>
                            </div>
                    </div>
                    <div className="gift-card__terms">
                        <p className="gift-card__terms-text">
                            Срок действия сертификата: 2 месяца<br></br>со дня приобретения.
                        </p>
                        <div className="gift-card__btn" onClick={() => setShowModal(true)}>
                            <a href="#!" className="gift-card__btn-link">
                                Приобрести
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                
            {showModal && 
                <IntroModal handleClose={handleClose} />
            }
        </>
    )
}

export default GiftCard;