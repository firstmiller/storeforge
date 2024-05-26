import React from 'react'
import ErrorAuth from '@components/Authentication/ErrorAuth/ErrorAuth';
import { InputAuth } from '@components/UI/input';
import { ButtonAuth } from '@components/UI/button';

const RegisterForm = ({ inputValues, setInputValues, textError, performValidation }) => {

    return (
        <>
            <ErrorAuth textError={textError} />
            <form onSubmit={performValidation}>
                <InputAuth
                    name='login'
                    value={inputValues.loginValue}
                    onChange={(e) => { setInputValues({ ...inputValues, loginValue: e.target.value }) }}
                    type='text'
                    placeholder="Логин"
                />
                <InputAuth
                    name='email'
                    value={inputValues.emailValue}
                    onChange={(e) => { setInputValues({ ...inputValues, emailValue: e.target.value }) }}
                    type='email'
                    placeholder="E-mail"
                />
                <InputAuth
                    name='password'
                    value={inputValues.passValue}
                    onChange={(e) => { setInputValues({ ...inputValues, passValue: e.target.value }) }}
                    type='password'
                    placeholder="Пароль"
                />
                <InputAuth
                    name='password2'
                    value={inputValues.repeatPassValue}
                    onChange={(e) => { setInputValues({ ...inputValues, repeatPassValue: e.target.value }) }}
                    type='password'
                    placeholder="Повторите пароль"
                />
                <ButtonAuth>Зарегистрироваться</ButtonAuth>
            </form>
        </>
    )
}

export default RegisterForm
