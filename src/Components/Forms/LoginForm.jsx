import React, { useContext, useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth/ButtonAuth';
import axios from 'axios';
import { AuthContext } from '../../context';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [textError, setTextError] = useState('');
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const authorize = (e) => {
        e.preventDefault();
        setTextError('');
        axios
            .post("http://localhost:8080/api/auth/authenticate", {
                username: loginValue,
                password: passValue
            })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('auth', response.data.token);
                    localStorage.setItem('isAuth', true);
                    setIsAuth(true);
                    navigate('/dashboard');
                }
            })
            .catch(() => {
                setTextError('Неверный логин или пароль');
              })
    }
    return (
        <form onSubmit={authorize}>
            <InputAuth
                name='login'
                value={loginValue}
                onChange={(e) => { setLoginValue(e.target.value) }}
                type='text'
                placeholder="Логин или E-mail"
            />
            <InputAuth
                name='password'
                value={passValue}
                onChange={(e) => { setPassValue(e.target.value) }}
                type='password'
                placeholder="Пароль"
            />
            <ButtonAuth>Войти</ButtonAuth>
            <ErrorAuth textError={textError} />
        </form>
    )
}

export default LoginForm
