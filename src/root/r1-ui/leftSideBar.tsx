import {Layout, Menu} from 'antd';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {logout} from '../../features/authorization/a-2-bll/auth-Reducer';
import {LogoutOutlined} from '@ant-design/icons';


export const LeftSideBar = () => {
    const {Sider} = Layout
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(true);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const logoutOnClickHandler = () => {
        dispatch(logout());
    };


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={'120px'} collapsedWidth={40}>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="2" icon={<LogoutOutlined/>} onClick={logoutOnClickHandler}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}