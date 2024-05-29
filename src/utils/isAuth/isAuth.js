import { AuthService } from '@utils/api'

export const logout = () => {
    delete localStorage.auth;
    window.location.reload();
}
export const isAuth = () => {
    AuthService.login()
    .then((response) => {
        if (response.status !== 200) {
            logout();
        }
    })
    .catch(() => {
        logout();
    });
};