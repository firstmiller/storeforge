import React, { useEffect, useState } from 'react'

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { UserService } from '@utils/api'
import { DashboardLayout } from '@components/DashboardLayout';
import { ShopService } from '../utils/api';
import ReactLoading from 'react-loading';
import { ModalDashboard } from '@components/UI/modal'
import InputDashboard from '../components/UI/input/InputDashboard/InputDashboard';


const Dashboard = () => {

    const [userEmail, setUserEmail] = useState();
    const [inputValues, setInputValues] = useState({ shopName: '', logo: '', shopColor: '' });
    const [shop, setShop] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [modalChangeOptions, setModalChangeOptions] = useState(false);
    const [nameImage, setNameImage] = useState('');

    function getShop() {
        setIsLoading(true);
        ShopService.getShops()
            .then((response) => {
                setShop(response);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            })
    }
    function imageUploaded(event) {
        let base64String = "";
        let file = event.target.files[0]
        //setNameImage(file.name);
        let reader = new FileReader();
        reader.onload = () => {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            setInputValues({
                ...inputValues, logo: reader.result.replace("data:", "")
                    .replace(/^.+,/, "")
            })
        }
        reader.readAsDataURL(file);
    }
    const saveChangesEditShop = () => {
        const newShop = {
            shopName: shop.shopName,
            newShopName: inputValues.shopName,
            logo: inputValues ? inputValues.logo : shop.logo
        }
        ShopService.updateShop(newShop)
        .then(() => {
            getShop();
            setModalChangeOptions(false);
        })
    }
    useEffect(() => {
        getShop();
        document.title = 'Панель управления | StoreForge';
        UserService.getUserInfo()
            .then((user) => {
                setUserEmail(user[1]);
            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const createShop = () => {
        const shop = {
            shopName: inputValues.shopName,
            logo: inputValues.logo
        }
        ShopService.addShop(shop).then(() => {
            window.location.reload();
        })
    }
    return (
        <DashboardLayout page="main" userEmail={userEmail}>
            <div className="dashboard__content">
                <div className="dashboard__container">
                    {isLoading ? <ReactLoading type={'spokes'} color={'green'} height={200} width={100} /> : ''}
                    {Object.keys(shop).length === 0 ?
                        <>
                            <div className="title">Создание интернет-магазина</div>
                            <form action="">
                                <div className="dashboard__inputItem">
                                    <div className="dashboard__inputText">Название</div>
                                    <input value={inputValues.shopName} onChange={(e) => setInputValues({ ...inputValues, shopName: e.target.value })} type="text" />
                                </div>
                                <div className="dashboard__inputItem">
                                    <div className="dashboard__inputText">Цвет</div>
                                    <input value={inputValues.shopName} onChange={(e) => setInputValues({ ...inputValues, shopName: e.target.value })} type="text" />
                                </div>
                                <div className="dashboard__inputItem">
                                    <div className="dashboard__inputText">Логотип</div>
                                    <input onChange={imageUploaded} name="file" type="file" id="input__file" className="input input__file" multiple />
                                    <label htmlFor="input__file" className="input__file-button">
                                        <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                                        <span className="input__file-button-text">Загрузите изображение</span>
                                    </label>
                                </div>

                                <ButtonRegister type='button' onClick={createShop} style={{ height: '43px', width: '167px', marginTop: '21px', marginLeft: '57px' }}>Создать</ButtonRegister>
                            </form>
                        </>
                        : <>
                            <div className="options__container">
                                <div className="title">Интернет-магазин: {shop.shopName}</div>
                                <div className='logo'><div className="options__text">Логотип: </div><img width='100px' src={`data:image/png;base64, ${shop.logo}`} alt="" /></div>
                                <ButtonRegister onClick={() => setModalChangeOptions(true)}>Изменить настройки</ButtonRegister>
                            </div>

                        </>}
                </div>
            </div>
            <ModalDashboard active={modalChangeOptions} setActive={setModalChangeOptions}>
                <div className="modal__title">Изменение настроек интернет-магазина</div>
                <InputDashboard
                    value={inputValues.shopName}
                    onChange={(e) => { setInputValues({ ...inputValues, shopName: e.target.value }) }}
                    title="Название"
                    required
                />
                <InputDashboard
                    value={inputValues.shopColor}
                    onChange={(e) => { setInputValues({ ...inputValues, shopColor: e.target.value }) }}
                    title="Цвет шапки"
                    required
                    type='color'
                />
                <input required onChange={imageUploaded} name="file" type="file" id="input__file" className="input input__file" multiple />
                <label htmlFor="input__file" className="input__file-button">
                    <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                    <span className="input__file-button-text">Загрузите изображение</span>
                </label>
                {nameImage}
                <ButtonRegister onClick={saveChangesEditShop} style={{ height: '60px', width: '300px' }}>Сохранить изменения</ButtonRegister>
            </ModalDashboard>
        </DashboardLayout>
    )
}

export default Dashboard