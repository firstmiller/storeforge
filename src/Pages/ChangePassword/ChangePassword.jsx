import React, { useEffect } from 'react';

import BackgroundAuth from '@components/Authentication/BackgroundAuth/BackgroundAuth';
import { ChangePasswordForm } from './components';
import { ModalAuth } from '@components/UI/modal';

const ChangePassword = () => {

  useEffect((() => {
    document.title = 'Change password - StoreForge'
  }), [])

  const [inputValues, setInputValues] = useState({passValue: '', repeatPassValue: ''});
  const [textError, setTextError] = useState('');
  
  const passValue = inputValues.passValue;
  const repeatPassValue = inputValues.repeatPassValue;

  const performValidation = (e) => {
    if (passValue.length < 6 || passValue.length > 30) {
      setTextError('Длина пароля должна быть не менее 6 и не более 30 символов.');
      e.preventDefault();
    }
    else if (passValue !== repeatPassValue) {
      setTextError('Пароли не совпадают!');
      e.preventDefault();
    }
    else {
      setTextError('');

    }
  }

  return (
    <BackgroundAuth>
      <ModalAuth title="Введите новый пароль">
        <ChangePasswordForm
          inputValues={inputValues}
          textError={textError}
          performValidation={performValidation}
        />
      </ModalAuth>
    </BackgroundAuth>
  )
}

export default ChangePassword
