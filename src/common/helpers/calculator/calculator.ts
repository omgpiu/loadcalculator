import {PackagingItemType, TotalCargoValueType, TransportType} from '../../types';


export const calcTotalValueCargo = ((arr: PackagingItemType[]) => {
    //считает общий объем и массу груза введенного на странице 2 ,
    // включая количетсво штук каждого груза (входные параметры "мм" и "кг" выходные "м.куб" и "тонны")
    let totalCargoValue = {cargoVolume: 0, cargoMass: 0, maxL: 0, maxH: 0, maxW: 0}
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        totalCargoValue.cargoMass += +((el.weight * el.amount) / 1000).toFixed(3);
        totalCargoValue.cargoVolume += +((el.height * el.length * el.width / 1e9) * el.amount).toFixed(3);
        //вычисление наибольшего габаритного размера 1 единицы груза (наприм. по обьему и весу груз проходит,
        // но один показатель высота или ширина не проходит по габаритам кузова транспорта)
        if (totalCargoValue.maxH < el.height / 1000) totalCargoValue.maxH = el.height / 1000
        if (totalCargoValue.maxW < el.width / 1000) totalCargoValue.maxW = el.width / 1000
        if (totalCargoValue.maxL < el.length / 1000) totalCargoValue.maxL = el.length / 1000
    }
    return totalCargoValue
})


// фильтр траспорта по общему объему и массе вместимого груза( без учета штабелирования и кантования),
// с учетом максимального габаритного размера 1 единицы груза
export const filterTransports = (totalCargoValue: TotalCargoValueType, arr: TransportType[]) => {
    return arr.filter(el => {
        const {cargoMass, cargoVolume, maxH, maxL, maxW} = totalCargoValue
        return el.car_m >= cargoMass
            && el.car_o >= cargoVolume
            && el.car_h >= maxH
            && el.car_l >= maxL
            && el.car_w >= maxW
    })
}

//Расчет остатка груза при ручном выборе транспорта( если в выбранную машину весь груз не входит)
export const calcRemainingCargo = (selectChoice: TransportType[], totalCargoValue: TotalCargoValueType) => {
    let totalCargoValueTransport = {cargoVolume: 0, cargoMass: 0};
    for (let i = 0; i < selectChoice.length; i++) {
        const el = selectChoice[i];
        totalCargoValueTransport.cargoVolume += el.car_o
        totalCargoValueTransport.cargoMass += el.car_m
    }
    const remainingVolume = Math.floor((totalCargoValue.cargoVolume - totalCargoValueTransport.cargoVolume) * 100) / 100;
    const remainingMass = Math.floor((totalCargoValue.cargoMass - totalCargoValueTransport.cargoMass) * 100) / 100;
    const percentMass = remainingMass > 0 ? Math.round(remainingMass * 100 / totalCargoValue.cargoMass) : 0;
    const percentVolume = remainingVolume > 0 ? Math.round(remainingVolume * 100 / totalCargoValue.cargoVolume) : 0;
    const remainPercent = percentMass > percentVolume ? percentMass : percentVolume;
    if (remainingVolume <= 0 && remainingMass <= 0) {
        return {
            remainingVolume: -10000,
            remainingMass: -10000,
            remainPercent: -10000
        }
    } else {
        return {
            remainingVolume,
            remainingMass,
            remainPercent: Math.abs(remainPercent)
        }
    }
}
