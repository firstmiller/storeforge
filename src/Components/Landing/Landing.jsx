import React from 'react'
import classes from './Landing.module.css';
import ButtonRegister from '../UI/button/ButtonRegister/ButtonRegister';


const Landing = ({ navigate }) => {
    return (
        <>
            <div className={classes.wrapperAdvertisement}>
                <div className={classes.advertisement}>
                    <div className={classes.advertisement__title}>Конструктор<br />интернет-магазинов</div>
                    <div className={classes.advertisement__desc}>Начните свой путь в онлайн бизнесе</div>
                    <ButtonRegister onClick={navigate}>Создать интернет-магазин</ButtonRegister>
                </div>
            </div>
            <div className={classes.wrapperSteps}>
                <div className={classes.steps}>
                    <div className={classes.steps__title}>Создайте интернет-магазин за 3 шага</div>
                    <div className={classes.step__stages}>
                        <div className={classes.step__stage}>
                            <div className={classes.step__number}>1</div>
                            <div className={classes.step__desc}>Зарегистрируйтесь</div>
                        </div>
                        <div className={classes.step__stage}>
                            <div className={classes.step__number}>2</div>
                            <div className={classes.step__desc}>Выберите шаблон</div>
                        </div>
                        <div className={classes.step__stage}>
                            <div className={classes.step__number}>3</div>
                            <div className={classes.step__desc}>Добавьте товары</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
