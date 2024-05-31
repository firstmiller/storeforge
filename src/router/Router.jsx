import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from '@utils/router';
import { privateRoutes, publicRoutes } from '@utils/router/routerList';

const Router = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
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

export default Router;
