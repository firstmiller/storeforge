import React from 'react'
import { Link } from 'react-router-dom';


import classes from './LinksAuth.module.css';

const LinksAuth = ({values}) => {

    return (
        <div className={classes.links}>
            {values.map((value, index) => <Link to={value.link} className={classes.link} key={index}>{value.text}</Link>)}
        </div>
    )
}

export default LinksAuth
