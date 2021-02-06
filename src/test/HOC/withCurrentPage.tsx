import React, {useState} from 'react';


export function WithCurrentPage<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const [currentPage, setCurrentPage] = useState(0);
    return (props: WCP) => {

        return <WrappedComponent {...props} currentPage={currentPage}/>;

    };

}
