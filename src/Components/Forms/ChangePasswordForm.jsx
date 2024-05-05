import React, { useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth';

const ChangePasswordForm = () => {

  const [passValue, setPassValue] = useState('');
  const [repeatPassValue, setRepeatPassValue] = useState('');
  const [textError, setTextError] = useState('');

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
    <>
      <ErrorAuth textError={textError} />
      <form action="" onSubmit={performValidation}>
        <InputAuth
          name='newPassword'
          value={passValue}
          onChange={(e) => { setPassValue(e.target.value) }}
          type='password'
          placeholder="Новый пароль"
        />
        <InputAuth
          name='newPassword2'
          value={repeatPassValue}
          onChange={(e) => { setRepeatPassValue(e.target.value) }}
          type='password'
          placeholder="Повторите новый пароль"
        />
        <ButtonAuth> Изменить пароль</ButtonAuth>
      </form>
    </>
  )
}

export default ChangePasswordForm
