import React from 'react';
import st from './PageFive.module.css';
import {PAGE_FOUR, PAGE_SIX} from '../../routes/routes';
import {CargoPage} from './CargoPage';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import ButtonBlock from '../../t5-common/buttonBlock/buttonBlock';

export const PageFive: React.FC = () => {


    return <div className={st.pageFiveMain}>

        <div className={st.notice}>
            <h1 className={st.noticeTitle}>Настройки размещения груза в контейнере</h1>

            <div className={st.noticeDesc}>
                <p>Выберите расположение груза, приемлемое для перевозки данного типа груза.</p> <br/>
                <p>Ограничение положения груза может отрицательно сказаться на эффективном
                    заполнении.</p>
            </div>
        </div>

        <CargoPage/>

        <ButtonBlock type={'default'} prevPageLink={PAGE_FOUR} nextPageLink={PAGE_SIX}/>

    </div>;
};

export default WithAuthRedirect(PageFive);
