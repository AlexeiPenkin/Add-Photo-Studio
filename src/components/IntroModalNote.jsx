import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './IntroModalNote'

const IntroModalNote = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    const handleClick = () => {
    // обработка нажатия кнопки
    };

    return ReactDOM.createPortal (
        <>
            <div className='overlay'>
                <div className='modal'>
                    <button className='closeModal'
                        onClick={()=> props.handleClose()} >
                        &#10006;
                    </button>
                    <div className="modal-note__form-wrap">
                        <h2>Благодарим за оставленную заявку!</h2>
                        <p>
                            Наши специалисты уже обрабатывают Вашу заявку и свяжутся с Вами в ближайшее время
                        </p>
                    </div>
                </div>
            </div>

            {showModal && 
                <IntroModalNote handleClose={handleClose} />
            }
        </>
    )
}

export default IntroModalNote