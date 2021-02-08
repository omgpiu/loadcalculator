import {Link} from "react-router-dom";
import {ReusableNavButton} from "./ReusebleNavigationButtons/BtnReus";
import React from "react";

type PropsType = {
    nextPageLink: string
    prevPageLink: string
}

export const GoToPage: React.FC<PropsType> = (props) => {

    return (
        <div>
            <div style={{margin: '10px'}}>
                { (props.nextPageLink === 'PAGE_TWO') ||
                <Link to={props.prevPageLink}> <ReusableNavButton step={'backward'}/></Link>
            }
            </div>
            <div style={{margin: '10px'}}>
                { (props.prevPageLink === 'PAGE_SIX') ||
                <Link to={props.nextPageLink}> <ReusableNavButton step={'forward'}/></Link>
            }
            </div>
        </div>
    )
}