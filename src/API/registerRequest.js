
axios
.post("http://localhost:8080/api/auth/register", {
    username: inputValues.loginValue,
    password: inputValues.passValue,
    email: inputValues.emailValue
})
.then(response => {
    if (response.status === 200) {
        localStorage.setItem('auth', response.data.token);
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        console.log(response);
        navigate('/dashboard');
    }
})
.catch(error => {
    console.log(error)
  })