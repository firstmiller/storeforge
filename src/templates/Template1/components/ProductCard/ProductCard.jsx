import React from 'react'
import classes from './productCard.module.css';

const ProductCard = ({title, price, image}) => {
    const url = require('@assets/img/product.png');
    return (
        <div className={classes.product}>
            <div className={classes.product__image}>
                <img src={image === null ? url : 'data:image/png;base64,' + image} alt="" />
            </div>
            <div className={classes.product__title}>{title}</div>
            <div className={classes.product__price}>{price}</div>
        </div>
    )
}

export default ProductCard
