import Dashboard from "../../Pages/Dashboard"
import Login from "../../Pages/Login"
import Main from "../../Pages/Main"
import NotFound from "../../Pages/NotFound"
import Recovery from "../../Pages/Recovery"
import Register from "../../Pages/Register"

export const privateRoutes = [
    {path: '/dashboard', component: Dashboard},
]
export const publicRoutes = [
    {path: '/', component: Main},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/recovery', component: Recovery},
    {path: '*', component: NotFound}
]
