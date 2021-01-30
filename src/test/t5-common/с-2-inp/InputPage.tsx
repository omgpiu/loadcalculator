import React from 'react';
import st from './InputPage.module.css';

export type myInputType = {
    type: string
    value?: string
    error?: boolean
    autoFocus?: boolean
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: () => void
    onBlur?: (e: React.FocusEvent<any>) => void
    name?: string
    className?: string
    onClick?: () => void
    disabled?: boolean
}


export const InputPage: React.FC<myInputType> = React.memo(({
                                                                error, className, type, name, onClick,
                                                                onBlur,
                                                                disabled,
                                                                value,
                                                                onChange,
                                                                onKeyPress,
                                                                placeholder

                                                            }) => {
    return (
        <div>
            <input
                className={error ? `${st.inputBase} ${st.red}` : st.inputBase}
                onBlur={onBlur}
                type={type}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
            />

        </div>
    );
});
