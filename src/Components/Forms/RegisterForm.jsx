import React, { useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth';

const RegisterForm = () => {

    const [inputValues, setInputValues] = useState({ loginValue: '', emailValue: '', passValue: '', repeatPassValue: '' });
    const [textError, setTextError] = useState('');

    const performValidation = (e) => {
        if (inputValues.loginValue.length < 2 || inputValues.loginValue.length > 30) {
            setTextError('Длина логина должна быть не менее 2 и не более 30 символов.');
            e.preventDefault();
        }
        else if (inputValues.passValue.length < 6 || inputValues.passValue.length > 30) {
            setTextError('Длина пароля должна быть не менее 6 и не более 30 символов.');
            e.preventDefault();
        }
        else if (inputValues.passValue != inputValues.repeatPassValue) {
            setTextError('Пароли не совпадают!');
            e.preventDefault();
        }
        else {
            setTextError('');
        }
    }
    return (
        <>
            <ErrorAuth textError={textError} />
            <form action="" onSubmit={performValidation}>
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
                    autoComplete="on"
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
