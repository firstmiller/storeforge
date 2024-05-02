import React, { useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth';

const LoginForm = () => {

    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [textError, setTextError] = useState('');
    return (
        <form action="/login" method="post">
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
                onChange={(e) => { setPassValue(e.target.value); console.log(123); }}
                type='password'
                placeholder="Пароль"
            />
            <ButtonAuth>Войти</ButtonAuth>
            <ErrorAuth textError={textError} />
        </form>
    )
}

export default LoginForm
