import {PalletType} from '../../test/t2.1-pages/p5-pallets/p5-reducer';
import fin from '../../assets/images/pageFive/fin.png';
import e_box from '../../assets/images/pageFive/e-box.jpg';
import eur from '../../assets/images/pageFive/eur.jpg';
import cargo_small from '../../assets/images/pageFive/cargo_small.jpg';
import cargo_base from '../../assets/images/pageFive/CARGO_BASE.webp';
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
        }, 1000)
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

export const page5 = {
    getPallets() {
        return fakeRequest(pallets, 'page5 получили виды паллетов и засетали в стэйт')
    },
    setPalletParam(palletParam: PalletType) {
        return fakeRequest(palletParam, 'page5 submit form - отправили на сервер параметры выбранных ' +
            'палетов пользователем, и засетали этот обьект с параметрами в стейт')
    }
}

export const page6 = {

}


export type ThunkErrorType = {
    rejectValue: { errors: Array<string> }
}
//page 4 pallets
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
        img: fin
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
        img: eur,
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
        img: e_box,
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
        img: cargo_small,
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
        img: cargo_base,
    },
]

//page 5 transport mode container
const containerData = [
    {'car':'Контейнер 10"DC','car_name':'Контейнер 10"DC','car_o':15,'car_l':2.83,'car_w':2.33,'car_h':2.37,'car_m':11},
    {'car':'Контейнер 20"OT','car_name':'Контейнер 20"OT','car_o':32,'car_l':5.41,'car_w':2.2,'car_h':2.28,'car_m':22},
    {'car':'Контейнер 20"DC','car_name':'Контейнер 20"DC','car_o':33.2,'car_l':5.9,'car_w':2.35,'car_h':2.38,'car_m':22},
    {'car':'Контейнер 20"PW','car_name':'Контейнер 20"PW','car_o':34.6,'car_l':5.95,'car_w':2.4,'car_h':2.38,'car_m':22},
    {'car':'Контейнер 20"HC','car_name':'Контейнер 20"HC','car_o':38.5,'car_l':5.91,'car_w':2.35,'car_h':2.68,'car_m':22},
    {'car':'Контейнер 40"OT','car_name':'Контейнер 40"OT','car_o':65.5,'car_l':11.54,'car_w':2.35,'car_h':2.38,'car_m':27},
    {'car':'Контейнер 40"DC','car_name':'Контейнер 40"DC','car_o':67.5,'car_l':12.04,'car_w':2.3,'car_h':2.37,'car_m':27},
    {'car':'Контейнер 40"PW','car_name':'Контейнер 40"PW','car_o':70.5,'car_l':12.04,'car_w':2.43,'car_h':2.37,'car_m':27},
    {'car':'Контейнер 40"HC','car_name':'Контейнер 40"HC','car_o':75.6,'car_l':12.05,'car_w':2.34,'car_h':2.68,'car_m':27},
    {'car':'Контейнер 40"HCPW','car_name':'Контейнер 40"HCPW','car_o':79.1,'car_l':12.1,'car_w':2.42,'car_h':2.69,'car_m':27},
    {'car':'Контейнер 45"HCPW','car_name':'Контейнер 45"HCPW','car_o':85.1,'car_l':13.55,'car_w':2.4,'car_h':2.56,'car_m':29},
    {'car':'Контейнер 45"HC','car_name':'Контейнер 45"HC','car_o':86,'car_l':13.55,'car_w':2.35,'car_h':2.69,'car_m':29}
]
export type ContainerDataType = typeof containerData;

//page 5 transport mode auto

const autoData = [
    {'car':'Портер','car_name':'Портер (2.65x1.5x1.6) 6м3','car_o':6,'car_l':2.65,'car_w':1.5,'car_h':1.6,'car_m':1},
    {'car':'Газель','car_name':'Газель (3x1.95x1.6) 9м3','car_o':9,'car_l':3,'car_w':1.95,'car_h':1.6,'car_m':1.5},
    {'car':'Газель','car_name':'Газель (4x2x1.9) 15м3','car_o':15,'car_l':4,'car_w':2,'car_h':1.9,'car_m':1.5},
    {'car':'Бычок','car_name':'Бычок (3.8x2.1x2) 15м3','car_o':15,'car_l':3.8,'car_w':2.1,'car_h':2,'car_m':3},
    {'car':'Зил','car_name':'Зил (4x2.3x2.2) 20м3','car_o':20,'car_l':4,'car_w':2.3,'car_h':2.2,'car_m':5},
    {'car':'Зил','car_name':'Зил (4x2.3x2.2) 30м3','car_o':30,'car_l':4,'car_w':2.3,'car_h':2.2,'car_m':5},
    {'car':'Маз, Камаз','car_name':'Маз, Камаз (6x2.4x2.35) 30м3','car_o':30,'car_l':6,'car_w':2.4,'car_h':2.35,'car_m':10},
    {'car':'Маз, Камаз','car_name':'Маз, Камаз (9x2.4x2.35) 45м3','car_o':45,'car_l':9,'car_w':2.4,'car_h':2.35,'car_m':10},
    {'car':'Фура','car_name':'Фура (13.6x2.45x2.65) 82м3','car_o':82,'car_l':13.6,'car_w':2.45,'car_h':2.65,'car_m':20},
    {'car':'Фура','car_name':'Фура (13.6x2.5x2.7) 90м3','car_o':90,'car_l':13.6,'car_w':2.5,'car_h':2.7,'car_m':20},
    {'car':'Фура сцепка','car_name':'Фура сцепка (7.2x2.45x3) 120м3','car_o':120,'car_l':7.2,'car_w':2.45,'car_h':3,'car_m':20},
];
export type AutoDataType = typeof autoData;