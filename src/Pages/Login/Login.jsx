import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import BackgroundAuth from '@components/Authentication/BackgroundAuth/BackgroundAuth';
import { LoginForm } from './components';
import { ModalAuth } from '@components/UI/modal';
import LinksAuth from '@components/Authentication/LinksAuth/LinksAuth';
import { login } from '@utils/api/auth';
import { AuthContext } from '@context';
import AuthService from '@utils/api/services/AuthService';

const Login = () => {

  const valuesLinks = [{ text: 'Забыли пароль', link: '/recovery' }, { text: 'Зарегистрироваться', link: '/register' }]

  const [inputValues, setInputValues] = useState({ loginValue: '', passValue: '' });

  const [textError, setTextError] = useState('');
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const authorize = (e) => {
    e.preventDefault();
    AuthService.authenticate(inputValues.loginValue, inputValues.passValue)
      .then(response => {
        if (response.status === 200) {
          login(response, setIsAuth, navigate);
        }
      })
      .catch(() => {
        setTextError('Неверный логин или пароль');
      })
  }

  useEffect((() => {
    document.title = 'Авторизация | StoreForge';
  }), [])

  return (
    <BackgroundAuth>
      <ModalAuth title='Вход'>
        <LoginForm
          inputValues={inputValues}
          setInputValues={setInputValues}
          authorize={authorize}
          textError={textError}
        />
        <LinksAuth values={valuesLinks} />
      </ModalAuth>
    </BackgroundAuth>
  )
}

export default Login
