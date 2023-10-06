import React, { useState } from 'react';
import IntroModal from './IntroModal'
import './Intro.scss';

const Intro = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }
    
    return (
        <>
            <div className='intro'>
                <div className="intro__wrap">
                    <h1 className="intro__title">
                        Профессиональная фотосессия в студии
                    </h1>
                    <h2 className="intro__subtitle">
                        Наша фотостудия позволит исполнить ваши мечты
                    </h2>
                    <p className="intro__text">
                        Фотографии стали неотъемлемой частью нашей жизни. Это теперь не просто памятные снимки в альбомах, ныне фото становиться способом понравиться окружающим, получить восхищение, заявить о себе всему миру.<br></br>Выбор правильной фотостудии занимает далеко не последнее место в получение фотографий. И мы с точностью заявляем, что нашей фотостудией вы останетесь довольны и еще не раз захотите возвращаться к нам. 
                    </p>
                    <div className="intro__btn" onClick={() => setShowModal(true)}>
                        <a href="#!" className="intro__btn-link">
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </div>

            {showModal && 
                <IntroModal handleClose={handleClose} />
            }

        </>
    )
}

export default Intro;
