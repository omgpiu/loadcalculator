import React, {CSSProperties} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Checkbox, Form, Input, Spin} from 'antd';
import st from './Login.module.css';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons/lib/icons';
import {Link, Redirect} from 'react-router-dom';
import {authActions, login} from '../../a-2-bll/auth-Reducer';
import {getCaptcha, getError, getIsAuth} from '../../a-2-bll/auth-selectors';
import {getAppStatus} from '../../../../root/r2-bll/app-selector';
import {PAGE_ONE} from '../../../../root/routes/routes';


export const Login = () => {

    const dispatch = useDispatch();
    const error = useSelector(getError);
    const isAuth = useSelector(getIsAuth);
    const captchaUrl = useSelector(getCaptcha);
    const status = useSelector(getAppStatus);

    if (isAuth) {
        return <Redirect to={PAGE_ONE}/>;
    }
    const onSubmit = async (values: {
        email: string,
        password: string,
        captcha: string,
        rememberMe: boolean
    }) => {
        await dispatch(login(values));

    };
    const resetError = () => {
        dispatch(authActions.setError({error: ''}));
    };
    const styleSpin = {
        position: 'absolute',
        width: '30px',
        left: 0,
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 auto',
    } as CSSProperties
    if(status === 'loading') return  <Spin style={styleSpin} size='large'/>
    return (
         <>
                <Form onFinish={onSubmit}
                      className={st.loginForm}
                >
                    <Form.Item
                        name="email"
                        {...error && {
                            help: error,
                            validateStatus: 'error',
                        }}
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               type="email"
                               name="email"
                               placeholder="Email"
                               onClick={resetError}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        {...error && {
                            help: error,
                            validateStatus: 'error'
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },

                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                            onClick={resetError}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Link target={'_blank'} className={st.loginFormForgot}
                              to="https://google.com">
                            Forgot password
                        </Link>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={st.loginFormButton}
                        >
                            Log in
                        </Button>
                        Or <Link target={'_blank'} to="google.com">register now!</Link>
                    </Form.Item>
                    <img src={captchaUrl ? captchaUrl : undefined} alt=""/>
                    {captchaUrl && <Form.Item
                        name="captcha"
                    >
                       <Input
                           placeholder="captcha"
                           onClick={resetError}
                           style={{width: '100px'}}
                       />
                    </Form.Item>}
                </Form>
            </>
    )
};


