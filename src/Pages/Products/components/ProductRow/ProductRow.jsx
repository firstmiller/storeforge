import React from 'react'
import classes from './productRow.module.css';

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';


const ProductRow = ({name, price, categories, imageBase64, count}) => {
    const url = require('@assets/img/product.png');

    return (
        <tr className={classes.row}>
            <td className={classes.row__name}>{name}</td>
            <td className={classes.row__price}>{price}</td>
            <td className={classes.row__categories}>{categories}</td>
            <td className={classes.row__image}><img src={imageBase64 === null ? url : `data:image/png;base64, ${imageBase64}`} alt="" /></td>
            <td className={classes.row__count}>{count}</td>
            <td className={classes.row__buttons}>
                <div className="changeProducts">
                    <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Редактировать</ButtonRegister>
                    <ButtonRegister style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Удалить</ButtonRegister>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow
