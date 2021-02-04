import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_TWO, PALLETS} from '../../routes/routes';
import {Button} from 'antd';
import {CargoTable} from '../p2-stepTwo/CargoTable';


export const PageThree: React.FC = () => {

    return (
        <div>
            PAGE THREE
            <div style={{margin: '10px'}}>
                <Link to={PAGE_TWO}> <Button type={'default'}>Назад</Button></Link>
                <CargoTable/>
                <Link to={PALLETS}> <Button type={'default'}>Дальше</Button></Link>
            </div>
        </div>


    );
};





