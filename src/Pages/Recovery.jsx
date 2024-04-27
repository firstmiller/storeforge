import React from 'react';

import BackgroundAuth from '../Components/Authentication/BackgroundAuth/BackgroundAuth';
import LinksAuth from '../Components/Authentication/LinksAuth/LinksAuth';
import RecoveryForm from '../Components/Forms/RecoveryForm';
import Modal from '../Components/UI/modal/Modal';

const Recovery = () => {

  const valuesLinks = [{ text: 'Войти', link: '/login' }, { text: 'Зарегистрироваться', link: '/register' }]

  return (
    <BackgroundAuth>
      <Modal title="Восстановление пароля">
        <RecoveryForm />
        <LinksAuth values={valuesLinks} />
      </Modal>
    </BackgroundAuth>
  )
}

export default Recovery
