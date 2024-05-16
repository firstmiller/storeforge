import { Link } from 'react-router-dom';
import classes from './header.module.css';

import React, { useState } from 'react'

const DashboardHeader = ({userEmail, logout}) => {
    return (
        <>
            <header className={classes.header} >
                <div className={classes.header__container}>
                    <div className={classes.header__logo}><Link to='/'>StoreForge</Link></div>
                    <div className={classes.header__nav}>
                        <div className={classes.header__profile}>
                            <div className={classes.header__email}>{userEmail}</div>
                            <div className={classes.header__profileImage}></div>
                            <div className={classes.header__arrow}>
                                <div className={classes.header__submenu}>
                                    <ul>
                                        <li>Настройки</li>
                                        <li onClick={logout}>Выйти</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>

    )
}

export default DashboardHeader