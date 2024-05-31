import React from 'react'
import {InputAuth} from '@components/UI/input';
import {ButtonAuth} from '@components/UI/button';

const RecoveryForm = ({emailValue, setEmailValue, textError}) => {

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
