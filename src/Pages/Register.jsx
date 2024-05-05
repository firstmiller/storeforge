import React, { useEffect } from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import LinksAuth from '../Components/Authentication/LinksAuth/LinksAuth';
import Modal from '../Components/UI/modal/Modal';
import RegisterForm from '../Components/Forms/RegisterForm';  

const Register = () => {

  const valuesLinks = [{ text: 'Уже зарегистрированы? Войти', link: '/login' }];

  useEffect((() => {
    document.title = 'Регистрация | StoreForge';
  }), [])

  return (
    <BackgroundAuth>
      <Modal title="Регистрация">
        <RegisterForm />
        <LinksAuth values={valuesLinks} />
      </Modal>
    </BackgroundAuth>
  )
}

export default Register
