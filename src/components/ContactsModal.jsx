import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './ContactsModal.scss'

const ContactsModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
        
    }

    return ReactDOM.createPortal (
        <>
            <div className="overlay">
                <div className="nav-modal">
                    <div className="nav-modal__content">
                        <button className='closeModal'
                            onClick={()=> props.handleClose()} >
                            &#10006;
                        </button>
                        <div className="info">
                            <h2>Контактная информация</h2>
                            <div className="info__address">
                                <p><strong>Адреса наших студий:</strong> </p>
                                <p>Москва, ул. Московская, д.1, офис 1</p>
                                <p>Москва, ул. Подмосковная, д.100, офис 100</p>
                                <p>Москва, ул. Замосковная, д.200, офис 200</p>
                            </div>
                            <p className="info__email"><strong>E-mail:</strong><br></br>add-photo@studio.net</p>
                            <p className="info__tel"><strong>Тел.:</strong><br></br>+7 777 555 77 79</p>
                            <p className="info__social"><strong>Telegram:</strong><br></br>@AddPhotoStudio</p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default ContactsModal