import React from 'react'
import classes from './dashoardNavbar.module.css';
import { Link } from 'react-router-dom';

const DashboardNavbar = ({ page }) => {
    return (
        <div className={classes.dashboard__navbar}>
            <ul>
                <Link to="/dashboard"><li className={page === 'main' ? classes.dashboard__navbar_active : ''}>Главная</li></Link>
                <Link to="/dashboard/templates"><li className={page === 'templates' ? classes.dashboard__navbar_active : ''}>Шаблоны</li></Link>
                <Link to="/dashboard/products"><li className={page === 'products' ? classes.dashboard__navbar_active : ''}>Товары</li></Link>
            </ul>
        </div>
    )
}

export default DashboardNavbar
