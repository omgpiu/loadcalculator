import React from 'react';
import {Modal} from 'antd';
import '../../../main/m1-ui/App.css';
import {PackagingItemType, ParamType} from './pageTwo-reducer';

type PropsType = {
    isModalVisible: boolean
    handleOk: (e: React.MouseEvent<HTMLElement>) => void
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void
    item: PackagingItemType
    onChangeHandler: (id: string, param: ParamType, paramQuantity: number) => void
}
export const ModalPageTwo: React.FC<PropsType> = ({isModalVisible, handleOk, handleCancel, item, onChangeHandler}) => {

    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}
                   onCancel={handleCancel}>


            </Modal>
        </>
    );
};
