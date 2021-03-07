import {filterTransports} from '../../common/helpers/calculator/calculator';
import {autoData, containerData, palletsData} from '../../common/staticData';
import {
    loadPlaceType,
    PackagingItemType,
    PalletType,
    PayloadTypeForLoading,
    TotalCargoValueType,
    TransportType
} from '../../common/types';
import { TRUCK} from '../../features/calculator/p10-calc-bll/payment-reducer';


const fakeRequest = (value?: any, textLog: any = 'resolve / response fake API') => {
    // имитация асинхронного запроса, задержка ответа 1сек, reject выходит рандомно , примерно 1 из 10 раз
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (Math.random() > 0.9) {
            //     return reject(new Error('ОШИБКА СДЕЛАНА СПЕЦИАЛЬНО !!! ОБНОВИ СТРАНИЦУ ...'));
            // } else {
            //
            // }
            console.log(textLog);
            resolve(value);
        }, 1000);
    });
};


export const authAPI = {
    // authMe() {
    //     return fakeRequest();
    // },
    // login(param:LoginParamsType) {
    //     return fakeRequest(param,'login succeed');
    // },
    // logout() {
    //     return fakeRequest('login succeed');
    // },
};
export const pageOne = {
    setLoadPlacePoint(param: loadPlaceType) {
        return fakeRequest(param, 'pageOne отправка флага места загрузки');
    },
    uploadFile(File: File) {
        return fakeRequest(File, 'pageOne загрузка документа завершена');
    }

};
export const page2 = {
    addCargoToTable(param: PackagingItemType) {
        return fakeRequest(param, 'cargo was added from back');
    },


};
export const page3 = {
    sendWithPallet(withPallet: PayloadTypeForLoading) {
        return fakeRequest(withPallet, 'отправка флага с паллетами или нет');
    }
};
export const page5 = {
    getPallets() {
        return fakeRequest(palletsData, 'page5 получили виды паллетов и засетали в стэйт');
    },
    setPalletParam(palletParam: PalletType) {
        return fakeRequest(palletParam, 'page5 submit form - отправили на сервер параметры выбранных ' +
            'палетов пользователем, и засетали этот обьект с параметрами в стейт');
    },
    sendCargo(cargoParam: PackagingItemType[]) {
        return fakeRequest(cargoParam, 'page5 submit form - отправили на сервер параметры выбранных грузов' +
            'и засетали этот обьект с параметрами в стейт');
    },
};

export const page6 = {
    getTransport(transportType: string) {
        return fakeRequest(transportType === TRUCK ? autoData : containerData,
            `page6 получили общий массив с типом транспорта ${transportType}`);
    },
    getAutoFilterData(totalCargoValue: TotalCargoValueType, transportType: string) {

        //фильтруем общий массив с транспортом в зависимости от типа Т/С, удовлетворяющий
        // totalCargoValue(обьект с общией массой и обьемом груза,а также с наибольшими габаритными размерами)
        const autoChoiceFiltered = filterTransports(totalCargoValue, transportType === TRUCK ? autoData : containerData);
        return fakeRequest(autoChoiceFiltered,
            `page6 получили массив автоматического выбора Т/С - типа:${transportType}`);
    },
    setSelectedTransport(selectedTransport: TransportType[]) {
        return fakeRequest(selectedTransport,
            `page6 отправили на сервер массив с выбранным транспортом ${selectedTransport}`);
    },

};


// export type ThunkErrorType = {
//     rejectValue: { errors: Array<string> }
// }


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors?: Array<FieldErrorType>
    data: D
}
export type FieldErrorType = { field: string; error: string }
