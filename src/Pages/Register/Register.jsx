import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BackgroundAuth from '@components/Authentication/BackgroundAuth/BackgroundAuth';
import LinksAuth from '@components/Authentication/LinksAuth/LinksAuth';
import { ModalAuth } from '@components/UI/modal';
import RegisterForm from './components/RegisterForm';
import { AuthService } from '@utils/api';
import { AuthContext } from '@context';
import { login } from '@utils/api/auth';

const Register = () => {

  const valuesLinks = [{ text: 'Уже зарегистрированы? Войти', link: '/login' }];
  const [inputValues, setInputValues] = useState({ loginValue: '', emailValue: '', passValue: '', repeatPassValue: '' });
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [textError, setTextError] = useState('');

  const registerRequest = () => {
    AuthService.register(inputValues)
      .then(response => {
        if (response.status === 200) {
          login(response, setIsAuth, navigate);
        }
      })
      .catch(error => {
        setTextError(error.message);
      })
  }

  const performValidation = (e) => {
    e.preventDefault();
    if (inputValues.loginValue.length < 2 || inputValues.loginValue.length > 30) {
      setTextError('Длина логина должна быть не менее 2 и не более 30 символов.');
      e.preventDefault();
    }
    else if (inputValues.passValue.length < 6 || inputValues.passValue.length > 30) {
      setTextError('Длина пароля должна быть не менее 6 и не более 30 символов.');
      e.preventDefault();
    }
    else if (inputValues.passValue !== inputValues.repeatPassValue) {
      setTextError('Пароли не совпадают!');
      e.preventDefault();
    }
    else {
      setTextError('');
      registerRequest();
    }
  }

  useEffect((() => {
    document.title = 'Регистрация | StoreForge';
  }), [])

  return (
    <BackgroundAuth>
      <ModalAuth title="Регистрация">
        <RegisterForm
          inputValues={inputValues}
          setInputValues={setInputValues}
          textError={textError}
          performValidation={performValidation}
        />
        <LinksAuth values={valuesLinks} />
      </ModalAuth>
    </BackgroundAuth>
  )
}

export default Register
