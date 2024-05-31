import React from 'react'
import classes from './productCard.module.css';
import { ButtonRegister } from '@components/UI/button';

const ProductCard = ({ storage, setStorage, product }) => {
    const url = require('@assets/img/product.png');
    return (
        <div className={classes.product}>
            <div className={classes.product__image}>
                <img src={product.productImage === null ? url : 'data:image/png;base64,' + product.productImage} alt="" />
            </div>
            <div className={classes.product__title}>{product.productName}</div>
            <div className={classes.product__price}>{`${product.price} руб.`}</div>
            <ButtonRegister onClick={() => {
                let temp = [...storage];
                let index = temp.findIndex(p=>p.productId === product.productId);
                if(index === -1) {
                    product.count = 1;
                    setStorage([...temp, product]);
                }
                else {
                    temp[index].count = temp[index].count + 1;
                    setStorage([...temp])
                }
                }
            }
            style={{ width: '150px', fontSize: '16px', height: '50px' }}>Добавить в корзину  </ButtonRegister>
        </div >
    )
}

export default ProductCard
