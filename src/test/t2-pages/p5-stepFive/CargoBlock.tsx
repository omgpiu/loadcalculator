import React from "react";
import st from './PageFive.module.css';

type PropsType = {
	img: string
	description: string
}

export const CargoBlock: React.FC<PropsType> = (props) => {
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