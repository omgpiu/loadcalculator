import {CargoBlock} from "./CargoBlock";
import React from "react";
import st from './PageFive.module.css';


export const CargoModule = (props: any) => {


	return <div className={st.cargoModule}>

		<div className={st.cargoDesc}>
			{
				props.cargoDesc.map((el: any) => {
					return (<p>{el}</p>)
				})
			}
		</div>

		<div className={st.cargoBlocks}>
			<CargoBlock description='Height' img={props.img[0]}/>
			<CargoBlock description='Length' img={props.img[1]}/>
			<CargoBlock description='Width' img={props.img[2]}/>
		</div>

	</div>
}