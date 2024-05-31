import React from 'react'

import classes from './Modal.module.css';


const Modal = ({ children, ...props }) => {

  return (
    <div className={classes.form}>
      <h2 className={classes.title}>{props.title}</h2>
      {children}
    </div>
  )
}

export default Modal
