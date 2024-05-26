import React from 'react'
import classes from './modalDashboard.module.css';

const ModalDashboard = ({active, setActive, children}) => {
    return (
        <div className={active ? classes.modal + ' ' + classes.active : classes.modal} onClick={() => {setActive(false)}}>
            <div className={classes.modal__content} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}

export default ModalDashboard
