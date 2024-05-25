import React, { useState } from 'react'
import ErrorAuth from '../../../components/Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../../../components/UI/input/InputAuth';
import ButtonAuth from '../../../components/UI/button/ButtonAuth';

const ChangePasswordForm = ({inputValues, setInputValues, textError, performValidation}) => {

  return (
    <>
      <ErrorAuth textError={textError} />
      <form action="" onSubmit={performValidation}>
        <InputAuth
          name='newPassword'
          value={passValue}
          onChange={(e) => { setInputValues({...inputValues, password: e.target.value}) }}
          type='password'
          placeholder="Новый пароль"
        />
        <InputAuth
          name='newPassword2'
          value={repeatPassValue}
          onChange={(e) => { setInputValues({...inputValues, repeatPassValue: e.target.value}) }}
          type='password'
          placeholder="Повторите новый пароль"
        />
        <ButtonAuth> Изменить пароль</ButtonAuth>
      </form>
    </>
  )
}

export default ChangePasswordForm
