import Dashboard from "@pages/Dashboard"
import {Products} from "@pages/Products"
import Templates from "@pages/Templates"
import { Login } from "@pages/Login"
import { Main } from "@pages/Main"
import { NotFound } from "@pages/NotFound"
import { Recovery } from "@pages/Recovery"
import { Register } from "@pages/Register"
import { Store } from "@/templates"

export const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard/templates', component: Templates },
    { path: '/myStore', component: Store },
    { path: '/dashboard/products', component: Products }
]
export const publicRoutes = [
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/recovery', component: Recovery },
    { path: '/store', component: Store },
    { path: '*', component: NotFound }
]
