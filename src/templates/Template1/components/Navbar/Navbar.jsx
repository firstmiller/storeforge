import React from 'react'
import classes from './navbar.module.css';

import { Category } from '../Category';

const Navbar = ({ sliderValue, setSliderValue }) => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__categories}>
                <div className={classes.category__title}>Категории</div>
                <div className={classes.navbar__categoryList}>
                    <Category title="Категория 1" id="category-1" name="category" value="c1" />
                    <Category title="Категория 2" id="category-2" name="category" value="c2" />
                    <Category title="Категория 3" id="category-3" name="category" value="c3" />
                    <Category title="Категория 4" id="category-4" name="category" value="c4" />
                </div>
            </div>
            <div className={classes.pricerange}>
                <div className={classes.pricerange__title}>Цена</div>
                <div className={classes.slidecontainer}>
                    <input onChange={(e) => { setSliderValue(e.target.value) }} type="range" min="1" max="100" value={sliderValue} id="myRange" />
                </div>
                <div className={classes.pricerange__inputs}>
                    <div className={classes.pricerange__minPrice}>
                        <input placeholder='Мин цена' type="text" />
                    </div>
                    <div className={classes.pricerange__maxPrice}>
                        <input type="text" placeholder='Макс цена' />
                    </div>
                </div>
                <div className={classes.navbar__categoryList}>
                    <Category title="Все цены" id="price-1" name="price" value="p1" />
                    <Category title="Меньше 100" id="price-2" name="price" value="c2" />
                    <Category title="100 - 1000" id="price-2" name="price" value="c2" />
                    <Category title="1000 - 10 000" id="price-3" name="price" value="c3" />
                    <Category title="10 000 - 100 000" id="price-4" name="price" value="c4" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
