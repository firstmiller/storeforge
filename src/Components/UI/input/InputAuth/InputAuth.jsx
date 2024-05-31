import classes from './InputAuth.module.css';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const InputAuth = ({ type, placeholder, ...props }) => {

    const isPass = type === 'password';

    const [typeInput, setTypeInput] = useState(type);
    const [placeholderUp, setPlaceholderUp] = useState(props.value !== '');

    const transformPlaceholder = () => {
        if (props.value === '') {
            setPlaceholderUp(!placeholderUp);
        }
        else
            setPlaceholderUp(true);
    }

    const changeTypeInput = () => {
        typeInput === 'text' ? setTypeInput('password') : setTypeInput('text');
    }
    useEffect(() => { if(props.value !== '') setPlaceholderUp(true)},[props.value])

    return (
        <div className={classes.block}>
            <label>
                <input
                    {...props}
                    onFocus={transformPlaceholder}
                    onBlur={transformPlaceholder}
                    className={classes.input}
                    type={typeInput}
                    autoComplete="new-password" 
                    required
                />

                <div className={classNames(classes.placeholder, placeholderUp ? classes.placeholderUp : '')}>
                    {placeholder}
                </div>
            </label>
            {/* Если тип инпута password, то необходимо создать элемент для скрытия/отображения пароля */}
            {isPass ?
                <div
                    onClick={() => { changeTypeInput() }}
                    className={typeInput === 'text' ? classes.hiddenPass : classes.openPass}>
                </div>
                : ''}
        </div>
    )
};
export default InputAuth;