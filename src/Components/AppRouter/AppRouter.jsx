import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../utils/router/PrivateRoute';
import PublicRoute from '../../utils/router/PublicRoute';
import { privateRoutes, publicRoutes } from '../../utils/router/routerList';


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PublicRoute/>}>
                {publicRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ))}
            </Route>
            <Route element={<PrivateRoute />}>
                {privateRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />

                ))}
            </Route>

        </Routes >
    )
}

export default AppRouter
