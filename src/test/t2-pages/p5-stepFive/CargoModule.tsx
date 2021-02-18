import {CargoBlock} from "./CargoBlock";
import React from "react";
import st from './PageFive.module.css';
import cargoHeight from "../../../assets/images/page7/cargoHeight.png";
import cargoLength from "../../../assets/images/page7/cargoLength.png";
import cargoWidth from "../../../assets/images/page7/cargoWidth.png";
import { PackagingItemType } from "../p2-stepTwo/pageTwo-reducer";

type PropsType = {
	packagingItem: PackagingItemType
}

export const CargoModule: React.FC<PropsType> = (props) => {

	const blockInfo = [
		{
			title: 'В высоту',
			image: cargoHeight,
			cargoPosition: props.packagingItem.inHeight,
		},
		{
			title: 'В длину',
			image: cargoLength,
			cargoPosition: props.packagingItem.inLength,
		},
		{
			title: 'В ширину',
			image: cargoWidth,
			cargoPosition: props.packagingItem.inWidth
		}
	];

	return <div className={st.cargoModule}>

		<div className={st.cargoDesc}>
			<p>Груз: Груз 2</p>
			<p>Количество: {props.packagingItem.amount} штук</p>
			<p>Вес: {props.packagingItem.weight} кг.</p>
			<p>Длина: {props.packagingItem.length} мм.</p>
			<p>Ширина: {props.packagingItem.width} мм.</p>
			<p>Высота: {props.packagingItem.height} мм.</p>

		</div>

		<div className={st.cargoBlocks}>
			{
				blockInfo.map(item => {
					return <CargoBlock description={item.title} img={item.image}
					cargoId={props.packagingItem.id} position={item.cargoPosition}/>
				})
			}
		</div>

	</div>
}