import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';

const PublicRoute = ({ children, ...rest }) => {

    const { isAuth } = useContext(AuthContext);

    return (
        !isAuth ? <Outlet/> : <Navigate to='/dashboard'/>
    );
}

export default PublicRoute