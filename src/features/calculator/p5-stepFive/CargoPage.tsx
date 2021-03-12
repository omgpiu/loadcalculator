import {CargoModule} from './CargoModule';
import React from 'react';
import st from './PageFive.module.css'
import {getPackagingCargo} from '../p2-stepTwo/p2.2-bll/pageTwo-selector';
import {useSelector} from 'react-redux';


const CargoPage: React.FC = () => {

	const packagingCargo = useSelector(getPackagingCargo);

	return <div className={st.cargoPage}>
		{
			packagingCargo.map((el) => {
				return <CargoModule key={el.id} packagingItem={el}/>
			})
		}
	</div>
}

export default CargoPage