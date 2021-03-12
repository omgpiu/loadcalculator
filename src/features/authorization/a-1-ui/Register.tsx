import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form, Input, message} from 'antd';
import st from './login/Login.module.css';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons/lib/icons';
import {getError, getRegisterSuccess} from '../a-2-bll/auth-selectors';
import {getAppStatus} from '../../../root/r2-bll/app-selector';
import {authActions, registerTC} from '../a-2-bll/auth-Reducer';
import {Spinner} from '../../../common/utils/spiner';
import {Redirect} from 'react-router-dom';
import {LOGIN} from '../../../root/routes/routesCalc';

export const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(getError);
    const status = useSelector(getAppStatus);
    const registerSuccess = useSelector(getRegisterSuccess);

    useEffect(() => {
        if (error) message.error(error)
    }, [error])
    useEffect(() => {
        if (registerSuccess) message.success('Регистрация прошла успешно!!! Пройдите логинизацию.')
    }, [registerSuccess])

    const onSubmit = async (values: {
        email: string
        password: string
        userName: string
        organization: string
    }) => {
        await dispatch(registerTC({registerObj: values}));
    };
    const resetError = () => {
        dispatch(authActions.setError({error: ''}));
    };
    if (registerSuccess) return <Redirect to={LOGIN}/>
    if (status === 'loading') return <Spinner/>
    return (
        <>
            <div className={st.form_wrapper}></div>

            <Form onFinish={onSubmit}
                  className={st.loginForm}
            >
                <h2>Форма регистрации</h2>
                <Form.Item name="email"{...error && {help: error, validateStatus: 'error'}}
                           rules={[
                               {type: 'email', message: 'The input is not valid E-mail!'},
                               {required: true, message: 'Please input your Email!'}
                           ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} type="email" name="email"
                           placeholder="Email" onClick={resetError}
                    />
                </Form.Item>
                <Form.Item name="userName"{...error && {help: error, validateStatus: 'error'}}
                           rules={[{required: true, message: 'Please input your name!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} type="text" name="userName"
                           placeholder="Имя" onClick={resetError}
                    />
                </Form.Item>
                <Form.Item name="password"{...error && {help: error, validateStatus: 'error'}}
                           rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                    placeholder="Пароль, не менее 8 символов" onClick={resetError}
                                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    />
                </Form.Item>
                <Form.Item name="organization">
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} type="text" name="organization"
                           placeholder="Название организации" onClick={resetError}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={st.loginFormButton}>Register now</Button>
                </Form.Item>
            </Form>
        </>
    )
};


