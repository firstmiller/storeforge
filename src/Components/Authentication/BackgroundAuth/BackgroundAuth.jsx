import React from 'react';

import classes from './BackgroundAuth.module.css';

const BackgroundAuth = ({children}) => {
  return (
    <div className={classes.background}>
        {children}
    </div>
  )
}

export default BackgroundAuth;
