import React from 'react'
import classes from './inputDashboard.module.css';

const InputDashboard = ({title, ...props}) => {
  return (
    <div className={classes.inputDashboard}>
        <label htmlFor="">{title}</label>
        <input {...props } type='text' />
    </div>
  )
}

export default InputDashboard
