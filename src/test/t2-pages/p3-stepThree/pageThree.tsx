import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_TWO} from '../../routes/routes';
import {Button} from 'antd';


export const PageThree: React.FC = () => {

    return (
        <div>
            PAGE THREE
            <div style={{margin: '10px'}}>
                <Link to={PAGE_TWO}> <Button type={'default'}>Назад</Button></Link>
            </div>
        </div>


    );
};





