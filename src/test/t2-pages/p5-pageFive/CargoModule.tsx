import {CargoBlock} from "./CargoBlock";
import React from "react";
import st from './PageFive.module.css';
import cargoHeight from "../../../assets/images/page7/cargoHeight.png";
import cargoLength from "../../../assets/images/page7/cargoLength.png";
import cargoWidth from "../../../assets/images/page7/cargoWidth.png";


export const CargoModule = (props: any) => {

	const blockInfo = [
		{
			title: 'В высоту',
			image: cargoHeight
		},
		{
			title: 'В длину',
			image: cargoLength
		},
		{
			title: 'В ширину',
			image: cargoWidth
		}
	]

	console.log(props.packagingItem)

	return <div className={st.cargoModule}>

		<div className={st.cargoDesc}>
			{/*{
				props.packagingItem.map((el: any) => {
					return <p>'el'</p>
				})
			}*/}
		</div>

		<div className={st.cargoBlocks}>
			{
				blockInfo.map(item => {
					return <CargoBlock description={item.title} img={item.image}/>
				})
			}
		</div>

	</div>
}