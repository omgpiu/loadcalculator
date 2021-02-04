import {Alert, Button, RadioChangeEvent} from 'antd';
import React, {useState} from 'react';
import {ContentTransportMode} from './contentTransportMode/contentTransportMode';
import {Link} from 'react-router-dom';
import {PAGE_FIVE} from '../../routes/routes';


export const TransportMode: React.FC<PropsType> = (props) => {
    const {text_description, img, onHandleClick} = props;
    const [mode, setMode] = React.useState(0);
    const [error, setError] = useState<null | number>(null)

    const onChange = (e: RadioChangeEvent) => {
        setMode(e.target.value)
        // при выборе поля снимаем ошибку
        setError(null)
    }
    const handleClick = () => {
        //если не выбрано ни одно поле сетаем ошибку и выводим алерт
        if (!mode) {
            return setError(1)
        }
        onHandleClick()
    }

    return (
        <>
            <ContentTransportMode onChange={onChange} img={img} mode={mode}
                                  text_description={text_description}/>
            <div>
                {
                    (mode === 2) && <div> 222</div>
                }
            </div>
            <div>
                <Link to={PAGE_FIVE}>
                    <Button type="default">Назад</Button>
                </Link>
                <Button type="default" onClick={handleClick}>Продолжить</Button>
            </div>
            {(error) && <Alert message='Не выбрано ни одного поля !' type="error"/>}
        </>
    )
}

type PropsType = {
    img: string
    text_description: { autoModeText: string, selectModeText: string }
    onHandleClick: () => void

}

