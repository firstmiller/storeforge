import React, { useContext, useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader'
import { AuthContext } from '../context';
import ButtonRegister from '../Components/UI/button/ButtonRegister/ButtonRegister';


const Dashboard = () => {

    const { setIsAuth } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState();

    const logout = () => {
        setIsAuth(false);
        delete localStorage.isAuth;
        delete localStorage.auth;
    }

    useEffect(() => {
        document.title = 'Панель управления | StoreForge';
        fetch('http://localhost:8080/api/login', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    logout();
                }
            });
        fetch('http://localhost:8080/api/auth/user', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => response.json())
            .then((user) => {
                setUserEmail(user[1]);
            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <DashboardHeader userEmail={userEmail} logout={logout} />
            <div className="dashboard">
                <div className="dashboard__navbar">
                    <ul>
                        <li>Главная</li>
                        <li>Шаблоны</li>
                        <li>Товары</li>
                    </ul>
                </div>
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
                                <input name="file" type="file" id="input__file" className="input input__file" multiple/>
                                    <label htmlFor="input__file" className="input__file-button">
                                        <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                                        <span className="input__file-button-text">Загрузите изображение</span>
                                    </label>
                            </div>
                            <ButtonRegister style={{height:'43px', width:'167px', marginTop: '21px', marginLeft:'57px'}}>Сохранить</ButtonRegister>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard