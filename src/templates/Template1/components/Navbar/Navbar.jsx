import React from 'react'
import classes from './navbar.module.css';

import { Category } from '../Category';
import { Slider } from '../Slider';

const Navbar = ({ setPriceRangeValues, valuePrice, setValuePrice, priceRangeValues }) => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__categories}>
                <div className={classes.category__title}>Категории</div>
                <div className={classes.navbar__categoryList}>
                    <Category title="Категория 1" id="category-1" name="category" value="1" />
                    <Category title="Категория 2" id="category-2" name="category" value="2" />
                    <Category title="Категория 3" id="category-3" name="category" value="3" />
                    <Category title="Категория 4" id="category-4" name="category" value="4" />
                </div>
            </div>
            <div className={classes.pricerange}>
                <div className={classes.pricerange__title}>Цена</div>
                <div className={classes.slidecontainer}>
                    <Slider values={priceRangeValues} setValues={setPriceRangeValues} />
                </div>

                <div className={classes.pricerange__inputs}>
                    <div className={classes.pricerange__minPrice}>
                        <input type="text" id='minPrice' onChange={(e) => { setPriceRangeValues([e.target.value, priceRangeValues[1]]) }} value={priceRangeValues[0]} placeholder='Мин цена' />
                    </div>
                    <div className={classes.pricerange__maxPrice}>
                        <input type="text" id='maxPrice' onChange={(e) => { setPriceRangeValues([priceRangeValues[0], e.target.value]) }} value={priceRangeValues[1]} placeholder='Макс цена' />
                    </div>
                </div>
                <div className={classes.navbar__categoryList}>
                    <Category
                        checked={valuePrice === '1' ? true : false}
                        onChange={(e) => { setValuePrice(e.target.value);setPriceRangeValues([0, 100000])}}
                        title="Все цены" id="price-1"
                        name="price"
                        value="1" />
                    <Category
                        checked={valuePrice === '2' ? true : false}
                        onChange={(e) => { setValuePrice(e.target.value);setPriceRangeValues([0, 1000])}}
                        title="Меньше 1000" id="price-2"
                        name="price"
                        value="2" />
                    <Category
                        checked={valuePrice === '3' ? true : false}
                        onChange={(e) => { setValuePrice(e.target.value); setPriceRangeValues([1000, 10000]) }}
                        title="1000 - 10000"
                        id="price-3"
                        name="price"
                        value="3" />
                    <Category
                        checked={valuePrice === '4' ? true : false}
                        onChange={(e) => { setValuePrice(e.target.value);setPriceRangeValues([10000, 50000]) }}
                        title="10000 - 50000"
                        id="price-4"
                        name="price"
                        value="4" />
                    <Category
                        checked={valuePrice === '5' ? true : false}
                        onChange={(e) => { setValuePrice(e.target.value);setPriceRangeValues([50000, 100000]) }}
                        title="50000 - 100 000"
                        id="price-5"
                        name="price"
                        value="5" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
