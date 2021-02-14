import {CargoModule} from "./CargoModule";
import React from "react";
import st from './PageFive.module.css'
import { getPackagingCargo } from "../p2-stepTwo/pageTwo-selector";
import { useSelector } from "react-redux";


export const CargoPage = () => {

	const packagingCargo = useSelector(getPackagingCargo)

	const cargoDescription2 = ['Груз: Груз 2', 'Количество: 80 штук', 'Вес: 50 кг.', 'Длина: 600 мм.',
		'Ширина: 400 мм.', 'Высота: 200 мм.']


	return <div className={st.cargoPage}>

		{
			packagingCargo.map((el, index) => {
				return <CargoModule packagingItem={el} key={index}/>
			})
		}


	</div>
}