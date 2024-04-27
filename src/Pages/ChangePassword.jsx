import React from 'react';


import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import Modal from '../Components/UI/modal/Modal';

const ChangePassword = () => {

  return (
    <BackgroundAuth>
      <Modal title="Введите новый пароль">
        <ChangePassword />
      </Modal>
    </BackgroundAuth>
  )
}

export default ChangePassword
