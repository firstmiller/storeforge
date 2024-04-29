import React from 'react'
import classes from './ErrorAuth.module.css';

const ErrorAuth = (props) => {
    return (
        <>
            {props.textError == '' ? '' : <div className={classes.error}>{props.textError}</div>}
        </>
    )
}

export default ErrorAuth
