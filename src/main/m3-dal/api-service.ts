import {PalletType} from '../../test/t2.1-pages/p5-pallets/p5-reducer';

const fakeRequest = (value?: any, textLog: any = 'resolve / response fake API') => {
    // имитация асинхронного запроса, задержка ответа 1сек, reject выходит рандомно , примерно 1 из 10 раз
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.9) {
                return reject(new Error('ОШИБКА СДЕЛАНА СПЕЦИАЛЬНО !!! ОБНОВИ СТРАНИЦУ ...'))
            } else {
                console.log(textLog)
                resolve(value)
            }
        }, 500)
    })
}


export const authAPI = {
    authMe() {
        return fakeRequest()
    },
    login() {
        return fakeRequest()
    },
    logout() {
        return fakeRequest()
    },
}

export const calcApi = {
    typeOfTransport() {
        return fakeRequest()
    },
    typeOfPackaging() {
        return fakeRequest()
    },

}
export const page5 = {
    getPallets() {
        return fakeRequest(pallets, 'page5 получили виды паллетов и засетали в стэйт')
    },
    setPalletParam(palletParam: PalletType) {
        return fakeRequest(palletParam, 'page5 submit form - отправили на сервер параметры выбранных ' +
            'палетов пользователем, и засетали этот обьект с параметрами в стейт')
    }
}


export type ThunkErrorType = {
    rejectValue: { errors: Array<string> }
}

const pallets: PalletType[] = [
    {
        id: '1',
        typePallet: 'FIN',
        length: 1000,
        width: 1000,
        height: 150,
        carryingCapacity: 1000,
        maxLoadingHeight: 2000,
        separatorSheetHeight: 50,
        img: 'https://img.globalrustrade.com/i/i/iT4B7fdAtb/600-600.png',
    },
    {
        id: '2',
        typePallet: 'EUR',
        length: 1100,
        width: 1100,
        height: 160,
        carryingCapacity: 1100,
        maxLoadingHeight: 2100,
        separatorSheetHeight: 60,
        img: 'https://5.imimg.com/data5/OM/SO/MY-46550214/wooden-pallets-500x500.png',
    },
    {
        id: '3',
        typePallet: 'E-BOX',
        length: 1200,
        width: 1200,
        height: 170,
        carryingCapacity: 1200,
        maxLoadingHeight: 2200,
        separatorSheetHeight: 70,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpH_d2eolBZgeQNcAceUSbDlKOpW21At8JVw&usqp=CAU',
    },
    {
        id: '4',
        typePallet: 'CARGO_SMALL',
        length: 1300,
        width: 1300,
        height: 180,
        carryingCapacity: 1300,
        maxLoadingHeight: 2300,
        separatorSheetHeight: 80,
        img: 'https://rotom.co.uk/media/catalog/product/1/1/11852.jpg',
    },
    {
        id: '5',
        typePallet: 'CARGO_BASE',
        length: 1400,
        width: 1400,
        height: 190,
        carryingCapacity: 1400,
        maxLoadingHeight: 2400,
        separatorSheetHeight: 90,
        img: 'https://avatars.mds.yandex.net/get-zen_doc/127081/pub_5b294b6157fa6100a81fb5db_5b296da281bb8e00aab69021/scale_1200',
    },
]