import {Layout, Menu} from 'antd';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {logout} from '../../features/authorization/a-2-bll/auth-Reducer';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {LOGIN} from '../routes/routes';

export const LeftSideBar = () => {
    const {Sider} = Layout
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const logoutOnClickHandler = () => {
        dispatch(logout());
    };


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <Link to={LOGIN}>Login</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<LogoutOutlined/>} onClick={logoutOnClickHandler}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}