import {CargoBlock} from './CargoBlock';
import React from 'react';
import st from './PageFive.module.css';
import cargoHeight from '../../../assets/images/page5/cargoHeight.png'
import cargoLength from '../../../assets/images/page5/cargoLength.png';
import cargoWidth from '../../../assets/images/page5/cargoWidth.png';
import {v1} from 'uuid';
import {PackagingItemType} from '../../../common/types';

type PropsType = {
    packagingItem: PackagingItemType
    cargoNumber: number
}

export const CargoModule: React.FC<PropsType> = React.memo((props) => {

    const blockInfo = [
        {
            id: v1(),
            title: 'В высоту',
            image: cargoHeight,
            cargoPosition: props.packagingItem.inHeight,
            checkName: 'inHeight'
        },
        {
            id: v1(),
            title: 'В длину',
            image: cargoLength,
            cargoPosition: props.packagingItem.inLength,
            checkName: 'inLength'
        },
        {
            id: v1(),
            title: 'В ширину',
            image: cargoWidth,
            cargoPosition: props.packagingItem.inWidth,
            checkName: 'inWidth'
        },
        {
            id: v1(),
            title: 'Укладка',
            image: cargoWidth,
            cargoPosition: props.packagingItem.isStack,
            checkName: 'isStack'
        }
    ];

    return <div className={st.cargoModule}>

        <div className={st.cargoDesc}>
            <p>Груз: {props.cargoNumber}</p>
            <p>Количество: {props.packagingItem.amount} штук</p>
            <p>Вес: {props.packagingItem.weight} кг.</p>
            <p>Длина: {props.packagingItem.length} мм.</p>
            <p>Ширина: {props.packagingItem.width} мм.</p>
            <p>Высота: {props.packagingItem.height} мм.</p>

        </div>

        <div className={st.cargoBlocks}>
            {
                blockInfo.map(item => {
                    return <CargoBlock description={item.title} img={item.image} key={item.id}
                                       cargoId={props.packagingItem.id} position={item.cargoPosition}
                                       checkName={item.checkName}/>;
                })
            }
        </div>

    </div>;
});
