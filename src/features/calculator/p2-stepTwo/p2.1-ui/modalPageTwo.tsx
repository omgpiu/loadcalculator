import React from 'react';
import {Modal} from 'antd';
import '../../../../root/r1-ui/App.css';
import {PackagingItemType} from '../../../../common/types';

type PropsType = {
    isModalVisible: boolean
    handleOk: (e: React.MouseEvent<HTMLElement>) => void
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void
    item: PackagingItemType
    onChangeHandler: (id: string, param: any, paramQuantity: number) => void
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
