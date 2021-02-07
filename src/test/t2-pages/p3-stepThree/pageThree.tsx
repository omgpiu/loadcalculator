import React from 'react';
import {Link} from 'react-router-dom';
import {PAGE_FIVE, PAGE_TWO} from '../../routes/routes';
import {ReusableNavButton} from '../../ReusebleNavigationButtons/BtnReus';


export const PageThree: React.FC = () => {

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





