import React, { useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth';

const ChangePasswordForm = () => {

  const [oldPassValue, setOldPassValue] = useState('');
  const [newPassValue, setNewPassValue] = useState('');
  const [textError, setTextError] = useState('');

  const performValidation = (e) => {
    if (oldPassValue.length < 6 || oldPassValue.length > 30) {
      setTextError('Длина пароля должна быть не менее 6 и не более 30 символов.');
      e.preventDefault();
    }
    else if (oldPassValue != newPassValue) {
      setTextError('Пароли не совпадают!');
      e.preventDefault();
    }
    else {
      setTextError('');

    }
  }

  return (
    <>
      <ErrorAuth textError={textError} />
      <form action="" onSubmit={performValidation}>
        <InputAuth
          name='newPassword'
          value={oldPassValue}
          onChange={(e) => { setOldPassValue(e.target.value) }}
          type='password'
          placeholder="Новый пароль"
        />
        <InputAuth
          name='newPassword2'
          value={newPassValue}
          onChange={(e) => { setNewPassValue(e.target.value) }}
          type='password'
          placeholder="Повторите новый пароль"
        />
        <ButtonAuth type={buttonType}> Изменить пароль</ButtonAuth>
      </form>
    </>
  )
}

export default ChangePasswordForm
