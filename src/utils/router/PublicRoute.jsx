import React, { useContext } from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';

const PublicRoute = ({ children, ...rest }) => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        !isAuth ? <Outlet/> : <Navigate to='/dashboard'/>
    );
}

export default PublicRoute
