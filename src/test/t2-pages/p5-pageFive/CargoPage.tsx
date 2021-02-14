import {CargoModule} from "./CargoModule";
import React from "react";
import st from './PageFive.module.css'
import cargo1H from "../../../assets/images/page7/cargo1H.png";
import cargo1L from "../../../assets/images/page7/cargo1L.png";
import cargo1W from "../../../assets/images/page7/cargo1W.png";
import cargo2H from "../../../assets/images/page7/cargo2H.png";
import cargo2L from "../../../assets/images/page7/cargo2L.png";
import cargo2W from "../../../assets/images/page7/cargo2W.png";
import cargo3H from "../../../assets/images/page7/cargo3H.png";
import cargo3L from "../../../assets/images/page7/cargo3L.png";
import cargo3W from "../../../assets/images/page7/cargo3W.png";

export const CargoPage = () => {

	const cargoImages1 = [cargo1H, cargo1L, cargo1W]
	const cargoImages2 = [cargo2H, cargo2L, cargo2W]
	const cargoImages3 = [cargo3H, cargo3L, cargo3W]

	const cargoDescription1 = [
		'Cargo: Cargo1', 'Qty: 300 units', 'Weight: 30 kg.', 'Length: 200 mm.', 'Width: 400 mm.', 'Height: 355 mm.']

	const cargoDescription2 = [
		'Cargo: Cargo2',
		'Qty: 80 units',
		'Weight: 50 kg.',
		'Length: 600 mm.',
		'Width: 400 mm.',
		'Height: 200 mm.']

	const cargoDescription3 = [
		'Cargo: Cargo3',
		'Qty: 100 units',
		'Weight: 60 kg.',
		'Length: 2000 mm.',
		'Width: 600 mm.',
		'Height: 440 mm.']

	return <div className={st.cargoPage}>

		<CargoModule cargoDesc={cargoDescription1} img={cargoImages1}/>

		<CargoModule cargoDesc={cargoDescription2} img={cargoImages2}/>

		<CargoModule cargoDesc={cargoDescription3} img={cargoImages3}/>

	</div>
}