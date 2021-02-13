import React from 'react';
import {useSelector} from 'react-redux';
import {Button, Checkbox, Form, Input} from 'antd';
import st from './Login.module.css';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons/lib/icons';
import {Link, Redirect} from 'react-router-dom';
import {getCaptcha, getError, getIsAuth} from './login-selectors';
import {PAGE_ONE} from '../routes/routes';
import ButtonBlock from '../t5-common/buttonBlock/buttonBlock';

export const Login = () => {


    const error = useSelector(getError);
    const isAuth = useSelector(getIsAuth);
    const captchaUrl = useSelector(getCaptcha);

//для разработки
    if (isAuth) {
        return <Redirect to={PAGE_ONE}/>;
    }
    const onSubmit = async (values: {
        email: string,
        password: string,
        captcha: string
    }) => {
        // await dispatch(loginTC(values));

    };
    const resetError = () => {
        // dispatch(authActions.setError(''));
    };
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
                          to="https://social-network.samuraijs.com/login">
                        Forgot password
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={st.loginFormButton}
                    >
                        Log in
                    </Button>
                    Or <Link target={'_blank'} to="https://social-network.samuraijs.com/signUp">register now!</Link>


                </Form.Item>

                <img src={captchaUrl ? captchaUrl : undefined} alt=""/>
                {captchaUrl &&<Form.Item
                    name="captcha"
                >
                    <Input
                        placeholder="captcha"
                        onClick={resetError}
                        style={{width: '100px'}}
                    />
                </Form.Item>}
             </Form>
            {/*Для теста*/}
            <ButtonBlock type={'default'} prevPageLink={PAGE_ONE}/>
        </>
    );
};


