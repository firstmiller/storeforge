import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '@context';
import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { AuthService, UserService } from '@utils/api'
import { DashboardLayout } from '@components/DashboardLayout';
import { ModalDashboard } from '@components/UI/modal';
import { InputDashboard } from '@components/UI/input';


const Products = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [inputsProduct, setInputsProduct] = useState({ name: '', price: '', category: '', imageBase64: '' });
    const [nameImage, setNameImage] = useState('');

    const addProduct = () => {
        // const newShop = {
        //     shopName: inputsProduct.name,
        //     logo: inputsProduct.imageBase64,
        //     styles: '123',
        //     template: 'sadsad',
        //     shopDescription: inputsProduct.category
        //   };
        // const axiosResponse =  axios.post('http://localhost:8080/api/shop/update', newShop, {
        //     headers: {
        //       "Content-type": "application/json; charset=UTF-8",
        //       Authorization: 'Bearer ' + localStorage.getItem('auth')
        //     }
        //   });
    }
    let base64String = "";

    function imageUploaded(event) {
        let file = event.target.files[0]
        setNameImage(file.name);
        let reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            setInputsProduct({...inputsProduct, imageBase64: base64String})
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }

    const logout = () => {
        setIsAuth(false);
        delete localStorage.auth;
    }
    useEffect(() => {
        document.title = 'Панель управления | StoreForge';
        AuthService.login()
            .then((response) => {
                if (response.status !== 200) {
                    logout();
                }
            })
            .catch(() => {
                logout();
            });

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
        <DashboardLayout page="products" userEmail={userEmail} logout={logout}>
            <div className="dashboard__content">
                <div className="container">
                    <div className="products__menu">
                        <div className="products__count">Товаров 10</div>
                        <ButtonRegister onClick={() => { setModalActive(true) }} style={{ height: '43px', width: '167px' }}>Добавить товар</ButtonRegister>
                    </div>
                </div>
                <div className="dashboard__container">
                    <div className="products__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Цена</th>
                                    <th>Категории</th>
                                    <th>Фото</th>
                                    <th>Количество</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>9.1</td>
                                    <td>Зелёная миля</td>
                                    <td>1999</td>
                                    <td>1999</td>
                                    <td>
                                        <div className="changeProducts">
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Редактировать</ButtonRegister>
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Удалить</ButtonRegister>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>9.1</td>
                                    <td>Побег из Шоушенка</td>
                                    <td>1994</td>
                                    <td>1994</td>
                                    <td>
                                        <div className="changeProducts">
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Редактировать</ButtonRegister>
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Удалить</ButtonRegister>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>8.6</td>
                                    <td>Властелин колец: Возвращение Короля</td>
                                    <td>2003</td>
                                    <td>1994</td>
                                    <td>
                                        <div className="changeProducts">
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Редактировать</ButtonRegister>
                                            <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Удалить</ButtonRegister>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalDashboard active={modalActive} setActive={setModalActive}>
                <div className="modal__title">Добавление товара</div>
                <InputDashboard
                    value={inputsProduct.name}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, name: e.target.value }) }}
                    title="Название"
                />
                <InputDashboard
                    value={inputsProduct.price}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, price: e.target.value }) }}
                    title="Цена"
                />
                <InputDashboard
                    value={inputsProduct.category}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, category: e.target.value }) }}
                    title="Категории"
                />
                <input onChange={imageUploaded} name="file" type="file" id="input__file" className="input input__file" multiple />
                <label htmlFor="input__file" className="input__file-button">
                    <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                    <span className="input__file-button-text">Загрузите изображение</span>
                </label>
                {nameImage}
                <ButtonRegister onClick={addProduct} style={{ height: '43px', width: '167px' }}>Сохранить</ButtonRegister>
            </ModalDashboard>
        </DashboardLayout>
    )
}

export default Products
