import React, { useState } from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import FormAuth from '../Components/UI/modal/Modal';
import InputAuth from '../Components/UI/input/InputAuth';
import ButtonAuth from '../Components/UI/button/ButtonAuth';
import LinksAuth from '../Components/Authentication/LinksAuth/LinksAuth';
import ErrorAuth from '../Components/Authentication/ErrorAuth/ErrorAuth';
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
