import React, {CSSProperties} from 'react';
import {Spin} from 'antd';

export const Spinner = () => {
    const styleSpin = {
        position: 'absolute',
        width: '40px',
        margin: '0 auto',
        top: '50%',
        left: 0,
        right: 0,
        transform: 'translateY(-50%)',
    } as CSSProperties
    return <Spin style={styleSpin} size='large'/>
}