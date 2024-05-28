import { AuthService } from '@utils/api'
import { useContext } from 'react';
import {AuthContext} from '@context'

export const Logout = () => {
    const { setIsAuth } = useContext(AuthContext);
    setIsAuth(false);
    delete localStorage.auth;
}
export const isAuth = () => {
    AuthService.login()
    .then((response) => {
        if (response.status !== 200) {
            Logout();
        }
    })
    .catch(() => {
        Logout();
    });
};