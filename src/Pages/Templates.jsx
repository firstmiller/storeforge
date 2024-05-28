import React, { useEffect, useState } from 'react'

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { UserService } from '@utils/api'
import { DashboardLayout } from '@components/DashboardLayout';
import { isAuth } from '@utils/isAuth';


const Templates = () => {
    const [userEmail, setUserEmail] = useState();

    useEffect(() => {
        document.title = 'Шаблоны | StoreForge';
        isAuth();

        UserService.getUserInfo()
            .then((user) => {
                setUserEmail(user[1]);
            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <DashboardLayout page="templates" userEmail={userEmail}>
            <div className="dashboard__content">
                <div className="dashboard__container">
                    <div className="title">Настройка интернет-магазина</div>
                    <form action="">
                        <div className="dashboard__inputItem">
                            <div className="dashboard__inputText">Название</div>
                            <input type="text" />
                        </div>
                        <div className="dashboard__inputItem">
                            <div className="dashboard__inputText">Логотип</div>
                            <input name="file" type="file" id="input__file" className="input input__file" multiple />
                            <label htmlFor="input__file" className="input__file-button">
                                <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                                <span className="input__file-button-text">Загрузите изображение</span>
                            </label>
                        </div>
                        <ButtonRegister style={{ height: '43px', width: '167px', marginTop: '21px', marginLeft: '57px' }}>Сохранить</ButtonRegister>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Templates
