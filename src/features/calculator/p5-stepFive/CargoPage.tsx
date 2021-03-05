import {CargoModule} from "./CargoModule";
import React from "react";
import st from './PageFive.module.css'
import {getPackagingCargo} from "../p2-stepTwo/p2.1-ui/pageTwo-selector";
import {useSelector} from "react-redux";


export const CargoPage: React.FC = () => {

	const packagingCargo = useSelector(getPackagingCargo);

	return <div className={st.cargoPage}>
		{
			packagingCargo.map((el, index) => {
				return <CargoModule key={el.id} packagingItem={el} cargoNumber={index + 1}/>
			})
		}
	</div>
}