import React from 'react'
import classes from './cart.module.css';
import {ButtonRegister} from '@components/UI/button';

const Cart = ({ calcSummStorage, storage }) => {
    const url = require('@assets/img/product.png');
    return (
        <div className={classes.cart}>
            {storage.map((product) => {
                return (<div className={classes.cart__item}>
                    <div className={classes.cart__logo}><img src={product.productImage === null ? url : 'data:image/png;base64,' + product.productImage} alt="" /></div>
                    <div className={classes.cart__itemName}>{product.productName}</div>
                    <div className={classes.cart__itemPrice}>{product.price + ' руб.'}</div>
                    <div className={classes.cart__itemCount}>{product.count}</div>
                </div>)
            })}
            <div className="totalSum">Общая сумма заказа: {calcSummStorage() + ' руб.'}</div>
            <ButtonRegister styles={{width: '50px'}}>Оформить заказ</ButtonRegister>
            
        </div>
    )
}

export default Cart
