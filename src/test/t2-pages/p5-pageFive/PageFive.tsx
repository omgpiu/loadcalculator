import React from 'react';
import st from './PageFive.module.css'
import {PAGE_SIX} from '../../routes/routes';
import {CargoPage} from './CargoPage';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import ButtonBlock from '../../t5-common/buttonBlock/buttonBlock';

export const PageFive: React.FC = () => {



	return <div className={st.pageFiveMain}>

		<div>
		<h1>Настройки размещения груза в контейнере</h1>
			<p>Выберите расположение груза, приемлемое для перевозки данного типа груза.
				Ограничение положения груза может отрицательно сказаться на эффективном заполнении.</p>
		</div>
		<CargoPage/>

		<ButtonBlock type={'default'} prevPageLink={PAGE_SIX}/>

	</div>
}


export default WithAuthRedirect(PageFive)
