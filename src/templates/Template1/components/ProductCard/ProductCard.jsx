import React from 'react'
import classes from './productCard.module.css';

const ProductCard = ({title, price}) => {
    const url = require('@assets/img/productImage.png');
    return (
        <div className={classes.product}>
            <div className={classes.product__image}>
                <img src={url} alt="" />
            </div>
            <div className={classes.product__title}>{title}</div>
            <div className={classes.product__price}>{price}</div>
        </div>
    )
}

export default ProductCard
