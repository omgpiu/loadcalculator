import React from "react";
import st from './PageFive.module.css';


export const CargoBlock = (props: any) => {
	return <div className={st.cargoBlock}>

		<p className={st.desc}>{props.description}</p>

		<div className={st.block}>

			<div className={st.blockImage}>
				<img src={props.img} width='100px' height='100px' alt='cargoPosition'/>
			</div>

			<div className={st.check}>
				<input type="checkbox"/>
			</div>

		</div>
	</div>
}