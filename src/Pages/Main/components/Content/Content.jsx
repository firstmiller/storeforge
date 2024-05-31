import React from 'react'
import classes from './Content.module.css';


const Content = ({children}) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    )
}

export default Content
