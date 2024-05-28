import React, { useContext, useEffect, useState } from 'react'

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { UserService, ProductService } from '@utils/api'
import { DashboardLayout } from '@components/DashboardLayout';
import { ModalDashboard } from '@components/UI/modal';
import { InputDashboard } from '@components/UI/input';
import { ProductRow } from './components/ProductRow';
import { stringImgBase64 } from '@/constants';
import { isAuth } from '@utils/isAuth';


const Products = () => {
    const [userEmail, setUserEmail] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [inputsProduct, setInputsProduct] = useState({ name: '', price: '', imageBase64: '', count: '', description: '' });
    const [nameImage, setNameImage] = useState('');
    const imgBase64 = stringImgBase64;
    const [products, setProducts] = useState([])
    const addProduct = () => {
        const newProduct = {
            name: inputsProduct.name,
            logo: inputsProduct.imageBase64,
            description: inputsProduct.description,
            price: inputsProduct.price,
            quantity: inputsProduct.count,
            shopName: 'shop1',
        };
        ProductService.addProduct(newProduct);
    }

    function imageUploaded(event) {
        let base64String = "";
        let file = event.target.files[0]
        setNameImage(file.name);
        let reader = new FileReader();
        reader.onload = () => {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            setInputsProduct({
                ...inputsProduct, imageBase64: reader.result.replace("data:", "")
                    .replace(/^.+,/, "")
            })
        }
        reader.readAsDataURL(file);

    }

    useEffect(() => {
        document.title = 'Товары | StoreForge';
        isAuth();

        UserService.getUserInfo()
            .then((user) => {
                setUserEmail(user[1]);
            })
            .catch((e) => {
                console.log(e);
            });

        ProductService.getProducts()
            .then((response) => {
                return response.productNames;
            })
            .then((products) => {
                console.log(products);
                setProducts(products);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <DashboardLayout page="products" userEmail={userEmail}>
            <div className="dashboard__content">
                <div className="container">
                    <div className="products__menu">
                        <div className="products__count">Товаров {products.length}</div>
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
                                {products.map((product) => {
                                    return <ProductRow key={product.productId} name={product.productName} price={product.price} categories={product.categories} imageBase64={product.productImage} count={product.quantity} />
                                })}
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
                    required
                />
                <InputDashboard
                    value={inputsProduct.price}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, price: e.target.value }) }}
                    title="Цена"
                    required
                />
                <InputDashboard
                    value={inputsProduct.category}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, categories: e.target.value }) }}
                    title="Категории"
                    required
                />
                <InputDashboard
                    value={inputsProduct.count}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, count: e.target.value }) }}
                    title="Количество"
                    required
                />
                <InputDashboard
                    value={inputsProduct.description}
                    onChange={(e) => { setInputsProduct({ ...inputsProduct, description: e.target.value }) }}
                    title="Описание"
                    required
                />
                <input required onChange={imageUploaded} name="file" type="file" id="input__file" className="input input__file" multiple />
                <label htmlFor="input__file" className="input__file-button">
                    <span className="input__file-icon-wrapper"><div className="input__file-icon"></div></span>
                    <span className="input__file-button-text">Загрузите изображение</span>
                </label>
                {nameImage}
                <ButtonRegister onClick={addProduct} style={{ height: '43px', width: '167px' }}>Добавить товар</ButtonRegister>
            </ModalDashboard>
        </DashboardLayout>
    )
}

export default Products
