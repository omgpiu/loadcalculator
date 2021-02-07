import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep} from '../../main/m2-bll/app-selector';
import {setCurrentStep} from '../../main/m2-bll/appReducer';


// export function WithCurrentPage<WCP>(WrappedComponent: React.ComponentType<WCP>) {
//
//     const [currentPage, setCurrentPage] = useState(0);
//     return (props: WCP) => {
//
//         return <WrappedComponent {...props} currentPage={currentPage}/>;
//
//     };
//
// }

function WithCurrentPage<WCP>(Component: React.ComponentType<WCP>) {
    const NewComponent = (props: any) => {
        const dispatch = useDispatch();
        const currentPage = useSelector(getCurrentPageStep);
        const nextPage = () => {
            dispatch(setCurrentStep({page: currentPage + 1}));
        };
        const prevPage = () => {
            dispatch(setCurrentStep({page: currentPage - 1}));
        };


        return <Component {...props} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage}/>;
    };


    return NewComponent;

};
export default WithCurrentPage;
