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
            style={{width: 120}}
            placeholder="Color"
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
            <Option value="blue" style={{color: 'blue'}}>Blue</Option>
            <Option value="red" style={{color: 'red'}}>Red</Option>
            <Option value="yellow" style={{color: 'purple'}}>Purple</Option>
            <Option value="orange" style={{color: 'orange'}}>Orange</Option>
            <Option value="black" style={{color: 'black'}}>Black</Option>
            <Option value="green" style={{color: 'green'}}>Green</Option>
        </Select>


    );
};






