import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import IntroModalNote from './IntroModalNote'
import './IntroModal.scss'

const IntroModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
        
    }

    return ReactDOM.createPortal (
        <>
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <button className='closeModal'
                            onClick={()=> props.handleClose()} >
                            &#10006;
                        </button>
                        <div className="modal-form">
                            <div className="modal-form__wrap">
                                <h2 className="modal-form__heading">
                                    Форма обратной связи
                                </h2>
                                <fieldset className="modal-form__fieldset">
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
                                <button type="submit" className="modal-form__btn" 
                                    onClick={e => e.stopPropagation()}>
                                    Отправить
                                </button>
                                <p className="modal-form__disclaimer">
                                    Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с <span className="disclaimer__span">политикой конфиденциальности</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && 
                <IntroModalNote handleClose={handleClose} />
            }
        </>,
        document.getElementById('modal')
    )
}

export default IntroModal