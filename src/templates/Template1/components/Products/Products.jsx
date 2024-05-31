import React from 'react'
import classes from './products.module.css';
import { ProductCard } from '../ProductCard';
import ReactLoading from 'react-loading';


const Products = ({storage, setStorage, isLoading, products, getCountProducts}) => {
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
            {isLoading ? <ReactLoading type={'spokes'} color={'green'} height={200} width={100} /> : ''}
                {products.map((product) => {
                return <ProductCard storage={storage} setStorage={setStorage} product={product} key={product.productId}/>})}
            </div>
            <div />
        </div>
    )
}

export default Products
