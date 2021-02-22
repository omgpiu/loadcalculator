import {CargoModule} from "./CargoModule";
import React from "react";
import st from './PageFive.module.css'
import {getPackagingCargo} from "../p2-stepTwo/pageTwo-selector";
import {useSelector} from "react-redux";


export const CargoPage: React.FC = () => {

	const packagingCargo = useSelector(getPackagingCargo);

	return <div className={st.cargoPage}>

		{
			packagingCargo.map((el, index) => {
				return <CargoModule packagingItem={el} cargoNumber={index + 1} key={index}/>
			})
		}


	</div>
}