import React from "react";
import st from './PageFive.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setPackagingPosition} from '../p2-stepTwo/pageTwo-reducer';
import {getPackagingCargo} from "../p2-stepTwo/pageTwo-selector";

type PropsType = {
	img: string
	description: string
	cargoId: string
	position: boolean
}

export const CargoBlock: React.FC<PropsType> = (props) => {

	const packagingCargo = useSelector(getPackagingCargo)

	const dispatch = useDispatch();

const positionSelect = (e: any) => {
	let position = e.currentTarget.checked
	dispatch(setPackagingPosition({id: e.currentTarget.cargoId, name: e.currentTarget.name, position}))
}



	return <div className={st.cargoBlock}>

		<p className={st.desc}>{props.description}</p>

		<div className={st.block}>

			<div className={st.blockImage}>
				<img src={props.img} width='100px' height='100px' alt='cargoPosition'/>
			</div>

			<div className={st.check}>
				<input type="checkbox" id={props.cargoId} checked={props.position}
					   name='props.position' onChange={positionSelect}/>
			</div>

		</div>
	</div>
}