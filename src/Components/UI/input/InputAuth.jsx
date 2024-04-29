import classes from './InputAuth.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';

const InputAuth = ({ type, placeholder, ...props }) => {

    const isPass = type == 'password' ? true : false;

    const [typeInput, setTypeInput] = useState(type);
    const [placeholderUp, setPlaceholderUp] = useState(false);

    const transformPlaceholder = () => {
        if (props.value == '') {
            setPlaceholderUp(!placeholderUp);
        }
    }

    const changeTypeInput = () => {
        typeInput == 'text' ? setTypeInput('password') : setTypeInput('text');
    }

    return (
        <div className={classes.block}>
            <label>
                <input
                    {...props}
                    onFocus={transformPlaceholder}
                    onBlur={transformPlaceholder}
                    className={classes.input}
                    type={typeInput}
                    required
                />

                <div className={classNames(classes.placeholder, placeholderUp ? classes.placeholderUp : '')}>
                    {placeholder}
                </div>

                {/* Если тип инпута password, то необходимо создать элемент для скрытия/отображения пароля */}
                {isPass ?
                    <div
                        onClick={() => { changeTypeInput() }}
                        className={typeInput == 'text' ? classes.hiddenPass : classes.openPass}>
                    </div>
                    : ''}
            </label>
        </div>
    )
};
export default InputAuth;