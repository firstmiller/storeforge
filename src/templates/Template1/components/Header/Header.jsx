import React from 'react'
import classes from './header.module.css';


const Header = ({filter, setFilter}) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__logo}>
                    <div className={classes.header__imageLogo}></div>
                    <div className={classes.header__nameLogo}>CLICON</div>
                </div>
                <div className={classes.header__search}>
                    <input value={filter.query} onChange={(e) => {setFilter({...filter, query: e.target.value})}} placeholder="Введите название товара" type="text" />
                    <div className={classes.header__searchImg}></div>
                </div>
                <div className={classes.header__nav}>
                    <div className={classes.header__basket}></div>
                </div>
            </div>
        </header>
    )
}

export default Header
