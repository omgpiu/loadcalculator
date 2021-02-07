import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {PAGE_FIVE, PAGE_THREE, PAGE_TWO} from '../../routes/routes';
import {ReusableNavButton} from '../../ReusebleNavigationButtons/BtnReus';
import {useSelector} from 'react-redux';
import {getCurrentPageStep} from '../../../main/m2-bll/app-selector';


export const PageThree: React.FC = () => {
    const getCurrentPage = useSelector(getCurrentPageStep)

    if(getCurrentPage!==PAGE_THREE){
        return <Redirect  to={getCurrentPage}/>
    }

    return (
        <div>


            PAGE THREE
            <div style={{margin: '10px'}}>
                <Link to={PAGE_TWO}> <ReusableNavButton step={'backward'}/></Link>


                {/*для удобства*/}
                <div style={{margin: '10px'}}>
                    <Link to={PAGE_FIVE}> <ReusableNavButton step={'forward'}/></Link>
                </div>
            </div>
        </div>


    );
};





