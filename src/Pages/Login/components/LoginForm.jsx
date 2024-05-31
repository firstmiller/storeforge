import React from 'react'
import ErrorAuth from '@components/Authentication/ErrorAuth/ErrorAuth';
import { InputAuth } from '@components/UI/input';
import { ButtonAuth } from '@components/UI/button';


const LoginForm = ({ inputValues, setInputValues, textError, authorize }) => {

    return (
        <form onSubmit={authorize}>
            <InputAuth
                name='login'
                value={inputValues.loginValue}
                onChange={(e) => { setInputValues({ ...inputValues, loginValue: e.target.value }) }}
                type='text'
                placeholder="Логин или E-mail"
            />
            <InputAuth
                name='password'
                value={inputValues.passValue}
                onChange={(e) => { setInputValues({ ...inputValues, passValue: e.target.value }) }}
                type='password'
                placeholder="Пароль"
            />
            <ButtonAuth>Войти</ButtonAuth>
            <ErrorAuth textError={textError} />
        </form>
    )
}

export default LoginForm
