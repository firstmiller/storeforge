import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';

const PrivateRoute = ({ children, ...rest }) => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        isAuth ? <Outlet/> : <Navigate to='/login'/>
    );
}

export default PrivateRoute
