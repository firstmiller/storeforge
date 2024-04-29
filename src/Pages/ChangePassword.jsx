import React from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import ChangePasswordForm from '../Components/Forms/ChangePasswordForm';
import Modal from '../Components/UI/modal/Modal';

const ChangePassword = () => {

  return (
    <BackgroundAuth>
      <Modal title="Введите новый пароль">
        <ChangePasswordForm />
      </Modal>
    </BackgroundAuth>
  )
}

export default ChangePassword
