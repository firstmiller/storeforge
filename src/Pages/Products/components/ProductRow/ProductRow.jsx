import React from 'react'
import classes from './productRow.module.css';

import ButtonRegister from '@components/UI/button/ButtonRegister/ButtonRegister';
import { ModalDashboard } from '@components/UI/modal';
import { InputDashboard } from '@components/UI/input';


const ProductRow = ({product, deleteProduct, editProduct }) => {
    const url = require('@assets/img/product.png');
    return (
        <>
            <tr className={classes.row}>
                <td className={classes.row__name}>{product.productName}</td>
                <td className={classes.row__price}>{product.price}</td>
                <td className={classes.row__categories}>{product.categories}</td>
                <td className={classes.row__image}><img src={!product.productImage ? url : `data:image/png;base64, ${product.productImage}`} alt="" /></td>
                <td className={classes.row__count}>{product.quantity}</td>
                <td className={classes.row__buttons}>
                    <div className="changeProducts">
                        <ButtonRegister onClick={() => { editProduct(product) }} style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Редактировать</ButtonRegister>
                        <ButtonRegister onClick={() => { deleteProduct(product) }} style={{ backgroundColor: '#ACB3AD', height: '29px', width: '129px', fontSize: '16px' }}>Удалить</ButtonRegister>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default ProductRow
