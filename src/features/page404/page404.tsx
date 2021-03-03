import {Button, Result} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_ONE} from '../../root/routes/routes';

export const Page404: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to={PAGE_ONE}> <Button type="primary">Back Home</Button></Link>}
        />
    );
};
