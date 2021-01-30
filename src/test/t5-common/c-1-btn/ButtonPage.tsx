import React from 'react';
import st from './ButtonPage.module.css';

export type myBtnType = {
    name: string
    type?: 'button' | 'reset' | 'submit'
    error?: boolean
    disabled?: boolean
    onClick?: () => void
    className?: string
}

export const ButtonPage: React.FC<myBtnType> = React.memo(({
                                                               error, className, type, name, onClick,
                                                               disabled
                                                           }) => {
    return (
        <div>
            <button
                className={error ? `${st.redBtn} ${st.btn} ${className}` : `${st.btn} ${className}`}
                onClick={onClick}
                disabled={disabled}
                type={type}
            > {name}
            </button>
        </div>
    );
});
