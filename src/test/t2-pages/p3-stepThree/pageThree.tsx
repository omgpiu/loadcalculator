import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_FIVE, PAGE_TWO} from '../../routes/routes';
import {Button} from 'antd';
import {CargoTable} from '../p2-stepTwo/CargoTable';
import {CloseCircleFilled, MessageOutlined} from '@ant-design/icons';


export const PageThree: React.FC = () => {

    return (
        <div>


            <MessageOutlined style={{fontSize: '16px', color: 'red'}}/>;
            PAGE THREE
            <div style={{margin: '10px'}}>
                <Link to={PAGE_TWO}> <Button type={'default'}>Назад</Button></Link>
                <CargoTable/>

                {/*для удобства*/}
                <div style={{margin: '10px'}}>
                    <Link to={PAGE_FIVE}> <Button type={'default'}>Далее</Button></Link>
                </div>
            </div>
        </div>


    );
};





