import React from 'react'
import classes from './products.module.css';
import { ProductCard } from '../ProductCard';

const Products = ({products, getCountProducts}) => {
    return (
        <div className={classes.products__container}>
            <div className={classes.products__options}>
                <div className={classes.products__activeFilters}>
                    <div className={classes.products__filtersTitle}>Активные фильтры:</div>
                </div>
                <div className={classes.products_resultFounds}>
                    <span className={classes.products_resultFoundsNumber}>{getCountProducts()} </span>
                    <span className={classes.products_resultFoundsText}>товаров найдено </span>
                </div>
            </div>
            <div className={classes.productsList}>
                {products.map((product) => <ProductCard key={product.id} title={product.title} price={product.price}/>)}
            </div>
            <div />
        </div>
    )
}

export default Products
