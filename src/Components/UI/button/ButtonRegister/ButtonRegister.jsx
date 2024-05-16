import React from 'react'
import classes from './ButtonRegister.module.css';

const ButtonRegister = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}

export default ButtonRegister
