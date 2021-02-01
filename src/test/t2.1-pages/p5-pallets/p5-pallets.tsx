import React from 'react';
import st from './p5.module.scss';


export const Page5Pallets = () => {

    const palletParameters: PalletType[] = [
        {id: 1, name: 'Длина:', value: '500', units: 'мм'},
        {id: 2, name: 'Ширина:', value: '1200', units: 'мм'},
        {id: 3, name: 'Высота:', value: '150', units: 'мм'},
        {id: 4, name: 'Грузоподъемность:', value: '750', units: 'кг'},
        {id: 5, name: 'Максимальная высота загрузки:', value: '2000', units: 'мм'},
        {id: 6, name: 'Высота разделительного листа:', value: '50', units: 'мм'},
    ]

    return (
        <div className={st.pallets}>
            <h3 className={st.pallets_head}>
                Паллеты
            </h3>
            <p> Параметры паллетов: </p>
            <span className={st.pallets_descr}>
                    Укажите габариты используемых паллетов и ограничения на расположение груза на паллетах.
                </span>
            <div className={st.pallets_inner}>
                <div className={st.pallets_img}></div>
                <PalletTable palletParameters={palletParameters}/>
            </div>

            <div className={st.pallets_wrapBtn}>
                <button className={st.pallets_btn}
                        onClick={() => console.log('pallets_btn')}>Назад
                </button>
                <button className={st.pallets_btn}
                        onClick={() => console.log('pallets_btn')}>Продолжить
                </button>
            </div>
        </div>
    )
};


const PalletTable: React.FC<PalletTableType> = ({palletParameters}) => {
    return (
        <table className={st.palletTable}>
            <tbody>
            {
                palletParameters.map((el) => {
                    return <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>
                            <input type="number" value={el.value} onChange={() => {
                            }}/>
                        </td>
                        <td>мм</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    )
}
type PalletTableType = {
    palletParameters: PalletType[]
}
type PalletType = {
    id: number
    name: string
    value: string
    units: string
}