import React from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import LinksAuth from '../Components/Authentication/LinksAuth/LinksAuth';
import Modal from '../Components/UI/modal/Modal';
import RegisterForm from '../Components/Forms/RegisterForm';  

const Register = () => {

  const valuesLinks = [{ text: 'Уже зарегистрированы? Войти', link: '/login' }];

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
