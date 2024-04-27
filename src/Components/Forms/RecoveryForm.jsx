import React, { useState } from 'react'
import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth';

const RecoveryForm = () => {

    const [emailValue, setemailValue] = useState('');
    const [textError, setTextError] = useState('');

    return (
        <>
            <ErrorAuth textError={textError} />
            <form action="">
                <InputAuth
                    name='email'
                    value={emailValue}
                    onChange={(e) => { setemailValue(e.target.value) }}
                    type='email'
                    placeholder="E-mail"
                    autoComplete="on" />
                <ButtonAuth>Сбросить пароль</ButtonAuth>
            </form>
        </>
    )
}

export default RecoveryForm
