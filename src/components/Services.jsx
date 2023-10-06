import React from 'react'; 
import './Services.scss';

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="services__wrapper">
                <h2 className='services__heading'>Виды услуг</h2>
                <div className="services__categories">
                    <div className="photo-1 grid-image">
                        <img src="./img/grid-img-1_LoveStory.jpg" alt="PhotoShoot-LoveStory" />
                        <h3>Фотосессия Лав Стори</h3>
                    </div>
                    <div className="photo-2 grid-image">
                        <img src="./img/grid-img-2_Teens.jpg" alt="PhotoShoot-Teens" />
                        <h3>Фотосессия для подростков</h3>
                    </div>
                    <div className="photo-3 grid-image">
                        <img src="./img/grid-img-3_Pairs.jpg" alt="PhotoShoot-Pairs" />
                        <h3>Парная фотосессия</h3>
                    </div>
                    <div className="photo-4 grid-image">
                        <img src="./img/grid-img-4_Men.jpg" alt="PhotoShoot-Men" />
                        <h3>Фотосессия для парней</h3>
                    </div>
                    <div className="photo-5 grid-image">
                        <img src="./img/grid-img-5_Family.jpg" alt="PhotoShoot-Family" />
                        <h3>Семейная фотосессия (дети +14)</h3>
                    </div>
                    <div className="photo-6 grid-image">
                        <img src="./img/grid-img-6_Group.jpg" alt="PhotoShoot-Group" />
                        <h3>Групповая фотосессия</h3>
                    </div>
                    <div className="photo-7 grid-image">
                        <img src="./img/grid-img-7_LookBook.jpg" alt="PhotoShoot-LookBook" />
                        <h3>Фотосессия Лукбук</h3>
                    </div>
                    <div className="photo-8 grid-image">
                        <img src="./img/grid-img-8_Girls.jpg" alt="PhotoShoot-Girls" />
                        <h3>Фотосессия для девушек</h3>
                    </div>
                    <div className="photo-9 grid-image">
                        <img src="./img/grid-img-9_Babyed.jpg" alt="PhotoShoot-Babyed" />
                        <h3>Фотосессия для беременных</h3>
                    </div>
                    <div className="photo-10 grid-image">
                        <img src="./img/grid-img-10_Animals.jpg" alt="PhotoShoot-Animals" />
                        <h3>Фотосессия с животными</h3>
                    </div>
                    <div className="photo-11 grid-image">
                        <img src="./img/grid-img-11_BusinessStyle.jpg" alt="PhotoShoot-BusinessStyle" />
                        <h3>Фотосессия «Деловой стиль»</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;