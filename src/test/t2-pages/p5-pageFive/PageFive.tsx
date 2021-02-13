import React from 'react';
import st from './PageFive.module.css'
import {PAGE_SIX} from '../../routes/routes';
import {CargoPage} from './CargoPage';
import {ButtonBlock} from "../../t5-common/buttonBlock/buttonBlock";


export const PageFive: React.FC = () => {

	return <div className={st.pageFiveMain}>

		<CargoPage/>

		{/*<ButtonBlock type={'default'} prevPageLink={PAGE_SIX}/>*/}

	</div>
}