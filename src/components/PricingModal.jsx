import React from 'react';
import ReactDOM from 'react-dom';
import './PricingModal.scss';

const PricingModal = (props) => {

    return ReactDOM.createPortal (
        <>
            <div className="overlay">
                <div className="pricing-modal">
                    <div className="pricing-modal__content">
                        <h2>Дополнительная ретушь фото</h2>
                        <div className="pricing-modal__form">
                            <div className="input-form">
                                <span>Количество</span>
                                <input type="text" placeholder="Введите количество фото для ретуши" />
                            </div>
                            <div className="pricing-modal__btn" onClick={()=> props.handleClose()}>
                                <a href="#!" className="pricing-modal__btn-link">
                                    Сохранить
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default PricingModal;