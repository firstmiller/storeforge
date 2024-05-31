import React, { useEffect, useState } from 'react'

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { UserService, ProductService } from '@utils/api'
import { DashboardLayout } from '@components/DashboardLayout';
import { ModalDashboard } from '@components/UI/modal';
import { InputDashboard } from '@components/UI/input';
import { ProductRow } from './components/ProductRow';
import ReactLoading from 'react-loading';
import { ShopService } from '../../utils/api';



const Products = () => {
    const [userEmail, setUserEmail] = useState();
    const [modalCreateProductActive, setModalCreateProductActive] = useState(false);
    const [modalEditProductActive, setModalEditProductActive] = useState(false);
    const [inputsProduct, setInputsProduct] = useState({ name: '', price: '', imageBase64: '', category: '', count: '', description: '' });
    const [nameImage, setNameImage] = useState('');
    const [lastNameProduct, setLastNameProduct] = useState('');
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState();
    const [shop, setShop] = useState('');


    const addProduct = () => {
        const newProduct = {
            name: inputsProduct.name,
            logo: inputsProduct.imageBase64,
            description: inputsProduct.description,
            price: inputsProduct.price,
            quantity: inputsProduct.count,
            shopName: shop.shopName,
        };
        ProductService.addProduct(newProduct)
            .then(() => {
                getProducts(shop);
                setModalCreateProductActive(false);
                setInputsProduct({ name: '', price: '', imageBase64: '', count: '', description: '', categorty:''});
                setNameImage('');
            })
    }
    const openModalCreateProduct = () => {
        if (shop === '') alert('Сначала нужно создать интернет-магазин!')
        else {
            setInputsProduct({ name: '', price: '', imageBase64: '', count: '', description: '' });
            setModalCreateProductActive(true)
        }
    }
    const getProducts = (shop) => {
        setIsLoading(true);
        ProductService.getProducts(shop)
            .then((response) => {
                return response.productNames;
            })
            .then((products) => {
                setProducts(products);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }
    const deleteProduct = (product) => {
        ProductService.deleteProduct(product)
            .then(() => {
                getProducts(shop);
            });
    }
    const editProduct = (product) => {
        setInputsProduct({ name: product.productName, price: product.price, imageBase64: product.productImage, count: product.quantity, description: product.productDescription })
        setLastNameProduct(product.productName);
        setModalEditProductActive(true);
    }
    const saveChangesEditProduct = () => {
        const newProduct = {
            name: lastNameProduct,
            newName: inputsProduct.name,
            logo: inputsProduct.imageBase64,
            description: inputsProduct.description,
            price: inputsProduct.price,
            quantity: inputsProduct.count,
            shopName: shop.shopName,
        };
        console.log(newProduct);
        ProductService.updateProduct(newProduct)
            .then(() => {
                getProducts();
                setModalEditProductActive(false);
                setInputsProduct({ name: '', price: '', imageBase64: '', count: '', description: '' });
                setNameImage('');
                getProducts(shop);
            })

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
        ShopService.getShops()
            .then((response) => {
                setShop(response);
                setIsLoading(false);
                return response;
            })
            .then((response) => {
                getProducts(response);
            })
            .catch(() => {
            })
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
        <DashboardLayout page="products" userEmail={userEmail}>
            <div className="dashboard__content">
                <div className="container">
                    <div className="products__menu">
                        <div className="products__count">Товаров {products.length}</div>
                        <ButtonRegister onClick={() => {
                            openModalCreateProduct();
                        }}
                            style={{ height: '43px', width: '167px' }}>Добавить товар</ButtonRegister>
                    </div>
                </div>
                {isLoading ? <ReactLoading type={'spokes'} color={'green'} height={200} width={100} /> :
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
                                        return <ProductRow
                                            nameImage={nameImage}
                                            imageUploaded={imageUploaded}
                                            active={modalEditProductActive}
                                            setActive={setModalEditProductActive}
                                            inputsProduct={inputsProduct}
                                            setInputsProduct={setInputsProduct}
                                            deleteProduct={deleteProduct}
                                            editProduct={editProduct}
                                            key={product.productId}
                                            product={product}
                                            saveChangesEditProduct={saveChangesEditProduct}
                                        />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
            <ModalDashboard active={modalCreateProductActive} setActive={setModalCreateProductActive}>
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
            <ModalDashboard active={modalEditProductActive} setActive={setModalEditProductActive}>
                <div className="modal__title">Изменение данных товара</div>
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
                <ButtonRegister onClick={saveChangesEditProduct} style={{ height: '60px', width: '300px' }}>Сохранить изменения</ButtonRegister>
            </ModalDashboard>
        </DashboardLayout>
    )
}

export default Products
