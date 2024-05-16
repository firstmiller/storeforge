import React, { useState } from 'react'
// import ErrorAuth from '../Authentication/ErrorAuth/ErrorAuth';
import InputAuth from '../UI/input/InputAuth';
import ButtonAuth from '../UI/button/ButtonAuth/ButtonAuth';

const RecoveryForm = () => {

    const [emailValue, setEmailValue] = useState('');
    // const [textError, setTextError] = useState('');

    return (
        <>
            {/* <ErrorAuth textError={textError} /> */}
            <form action="">
                <InputAuth
                    name='email'
                    value={emailValue}
                    onChange={(e) => { setEmailValue(e.target.value) }}
                    type='email'
                    placeholder="E-mail"
                />
                <ButtonAuth>Сбросить пароль</ButtonAuth>
            </form>
        </>
    )
}

export default RecoveryForm
