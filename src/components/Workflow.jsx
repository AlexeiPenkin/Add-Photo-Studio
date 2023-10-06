import React from 'react'; 
import './Workflow.scss';

const Workflow = () => {
    return (
        <div className='workflow'>
            <h2 className="workflow__heading">Этапы работ</h2>
            <div className="scheme">
                <div className="scheme__wrapper">
                    <div className="stage stage-1">
                        <img src="./img/stage-number-1.svg" alt="StageNo." className="stage__number" />
                        <h4 className="stage__heading">Заявка</h4>
                        <p>
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких. 
                        </p>
                    </div>
                    <div className="stage stage-2">
                        <img src="./img/stage-number-2.svg" alt="StageNo." className="stage__number" />
                        <h4 className="stage__heading">Бронь</h4>
                        <p>
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких.
                        </p>
                    </div>
                    <div className="stage stage-3">
                        <img src="./img/stage-number-3.svg" alt="StageNo." className="stage__number" />
                        <h4 className="stage__heading">Составление<br></br>Технического задания</h4>
                        <p>
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких.
                        </p>
                    </div>
                    <div className="stage stage-4">
                        <img src="./img/stage-number-4.svg" alt="StageNo." className="stage__number" />
                        <h4 className="stage__heading">Съёмка</h4>
                        <p>
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких.
                        </p>
                    </div>
                    <div className="stage stage-5">
                        <img src="./img/stage-number-5.svg" alt="StageNo." className="stage__number" />
                        <h4 className="stage__heading">Готовые фото</h4>
                        <p>
                            Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workflow;