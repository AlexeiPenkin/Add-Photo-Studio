import React, { useState } from 'react';
import ContactsModal from './ContactsModal';
import './Header.scss';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }
    
    return (
        <>
            <div className='header'>
                <div className="header__wrap">
                    <div className="header__logo">
                        <img src="./img/logo-header.svg" alt="Logo" className="header__logo-img" />
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <a href="#projects">Портфолио</a>
                            <a href="#services">Виды услуг</a>
                            <a href="#description">О фотостудии</a>
                            <a href="#pricing">Услуги и цены</a>
                            <a href="#!" onClick={() => setShowModal(true)}>Контакты</a>
                        </ul>
                    </nav>
                    <div className="header__feedback">
                        <div className="header__feedback-btn">
                            <a href="#!" className="feedback-btn-link">
                                Обратный звонок
                            </a>
                        </div>
                        <div className="header__phone-number">
                            <p>+7 (499) 344 60 91</p>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && 
                <ContactsModal handleClose={handleClose} />
            }
        </>
    )
}

export default Header;