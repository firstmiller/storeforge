import React from 'react'
import classes from './category.module.css';

const Category = (props) => {
    return (
        <div className={classes.navbar__category}>
            <input {...props} type="radio" />
            <label htmlFor={props.id}></label>
            <div className={classes.navbar__categoryText}>{props.title}</div>
        </div>
    )
}

export default Category
