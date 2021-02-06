import React from 'react';
import {Select} from 'antd';

const {Option} = Select;

export const TableSelect: React.FC = () => {
    function onChange(value: string) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(value: string) {
        console.log('search:', value);
    }

    return (
        <Select
            showSearch
            style={{width: 200}}
            placeholder="Select a colour"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                !!option && option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            bordered={false}
        >
            <Option value="blue">Blue</Option>
            <Option value="red">Red</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="black">Black</Option>
            <Option value="green">Green</Option>
        </Select>


    );
};






