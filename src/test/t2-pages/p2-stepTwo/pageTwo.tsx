import {Button} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_ONE} from '../../routes/routes';
import {CaretLeftOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import {getPackagingImage} from './pageTwo-selector';

export const PageTwo: React.FC = () => {
    const packingImg = useSelector(getPackagingImage);

    return (
        <div>
            <p>Тип упаковки</p>
            {
                packingImg.map((img, index) => {
                    return <img src={img} alt="" key={index} width={'100px'} height={'100px'}/>;
                })
            }

            <Link to={PAGE_ONE}> <Button type={'default'} icon={<CaretLeftOutlined/>}>Назад</Button></Link>

        </div>


    );
};





