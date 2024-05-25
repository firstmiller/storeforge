import Dashboard from "@pages/Dashboard"
import { Login } from "@pages/Login"
import { Main } from "@pages/Main"
import { NotFound } from "@pages/NotFound"
import { Recovery } from "@pages/Recovery"
import { Register } from "@pages/Register"
import { Store } from "@/templates"

export const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard/templates', component: Dashboard },
    { path: '/dashboard/products', component: Dashboard }
]
export const publicRoutes = [
    { path: '/', component: Main },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/recovery', component: Recovery },
    { path: '/store', component: Store },
    { path: '*', component: NotFound }

]
