export function login(response, setIsAuth, navigate) {
    localStorage.setItem('auth', response.data.token);
    setIsAuth(true);
    navigate('/dashboard');
} 
export function logout(setIsAuth) {
    setIsAuth(false);
    delete localStorage.auth;
}