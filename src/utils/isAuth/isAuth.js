import { AuthService } from '@utils/api'

export const logout = () => {
    if (localStorage.auth) {
        delete localStorage.auth;
        window.location.reload();
    }
}
export const isAuthCheck = () => {
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