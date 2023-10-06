import React from 'react';
import './Decor.scss';

const Decor = () => {
    return (
        <div className="decoration" id="decoration">
            <h2 className="decoration__heading">
                Оформление фотостудии
            </h2>
            <div className='video'>
                <img src="./img/decor-bg.png" alt="Video" />
            </div>
        </div>
    )
}

export default Decor;