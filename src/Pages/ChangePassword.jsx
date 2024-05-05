import React, { useEffect } from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import ChangePasswordForm from '../Components/Forms/ChangePasswordForm';
import Modal from '../Components/UI/modal/Modal';

const ChangePassword = () => {

  useEffect((() => {
    document.title = 'Change password - StoreForge'
  }), [])

  return (
    <BackgroundAuth>
      <Modal title="Введите новый пароль">
        <ChangePasswordForm />
      </Modal>
    </BackgroundAuth>
  )
}

export default ChangePassword
