import React, { useEffect } from 'react'
import classes from './header.module.css';
import { Cart } from '../Cart'
import { FaShoppingCart } from 'react-icons/fa'


const Header = ({ calcSummStorage, findSizeStorage, storeData, storage, setCartOpen, cartOpen, filter, setFilter }) => {
    const url = require('@assets/img/product.png');
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__logo}>
                    <div className={classes.header__imageLogo}><img src={storeData.logo === null ? url : 'data:image/png;base64,' + storeData.logo} alt="" /></div>
                    <div className={classes.header__nameLogo}>{storeData.shopName}</div>
                </div>
                <div className={classes.header__search}>
                    <input id='search' value={filter.query} onChange={(e) => { setFilter({ ...filter, query: e.target.value }) }} placeholder="Введите название товара" type="text" />
                    <div className={classes.header__searchImg}></div>
                </div>
                <div className={classes.header__nav}>
                    <div className={`${classes.header__basket} ${cartOpen && classes.active} `}><FaShoppingCart onClick={(() => { setCartOpen(!cartOpen) })} size={'1.4em'} />
                        <div className={classes.header__sizeBasket}>{findSizeStorage()}</div>
                    </div>
                    {cartOpen && (
                        <div className={classes.shopCart}>
                            <Cart calcSummStorage={calcSummStorage} storage={storage}>
                            </Cart>

                        </div>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header
