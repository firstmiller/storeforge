import React, { useEffect, useState } from 'react';

import BackgroundAuth from '@components/Authentication/BackgroundAuth/BackgroundAuth';
import LinksAuth from '@components/Authentication/LinksAuth/LinksAuth';
import {RecoveryForm} from './components';
import { ModalAuth } from '@components/UI/modal';

const Recovery = () => {

  const valuesLinks = [{ text: 'Войти', link: '/login' }, { text: 'Зарегистрироваться', link: '/register' }]

  const [emailValue, setEmailValue] = useState('');
  //const [textError, setTextError] = useState('');

  useEffect((() => {
    document.title = 'Восстановление пароля | StoreForge';
  }), [])

  return (
    <BackgroundAuth>
      <ModalAuth title="Восстановление пароля">
        <RecoveryForm emailValue={emailValue} setEmailValue={setEmailValue}/>
        <LinksAuth values={valuesLinks} />
      </ModalAuth>
    </BackgroundAuth>
  )
}

export default Recovery
