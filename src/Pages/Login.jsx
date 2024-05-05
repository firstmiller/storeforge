import React, { useEffect } from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import LoginForm from '../Components/Forms/LoginForm';
import Modal from '../Components/UI/modal/Modal';
import LinksAuth from '../Components/Authentication/LinksAuth/LinksAuth';

const Login = () => {

  const valuesLinks = [{ text: 'Забыли пароль', link: '/recovery' }, { text: 'Зарегистрироваться', link: '/register' }]

  useEffect((() => {
    document.title = 'Авторизация | StoreForge';
  }), [])

  return (
    <BackgroundAuth>
      <Modal title='Вход'>
        <LoginForm />
        <LinksAuth values={valuesLinks}/>
      </Modal>
    </BackgroundAuth>
  )
}

export default Login
