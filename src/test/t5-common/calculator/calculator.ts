import {CustomerCargo} from '../../t2-pages/p3-stepThree/pageThree-reducer';
import {TransportType} from '../../../main/m3-dal/api-service';

export const calcTotalValueCargo = (arr: CustomerCargo[]) => {
    //считает общий объем и массу груза введенного на странице 2 ,
    // включая количетсво штук каждого груза (входные параметры "мм" и "кг" выходные "м.куб" и "тонны")
    let commonDataOfCargo: TotalCargoValueType = {cargoVolume: 0, cargoMass: 0, maxL: 0, maxH: 0, maxW: 0}
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        commonDataOfCargo.cargoMass += +((el.mass * el.quantity) / 1000).toFixed(3);
        commonDataOfCargo.cargoVolume += +((el.height * el.length * el.width / 1e9) * el.quantity).toFixed(3);
        //вычисление наибольшего габаритного размера 1 единицы груза (наприм. по обьему и весу груз проходит,
        // но один показатель высота или ширина не проходит по габаритам кузова транспорта)
        if (commonDataOfCargo.maxH < el.height / 1000) commonDataOfCargo.maxH = el.height / 1000
        if (commonDataOfCargo.maxW < el.width / 1000) commonDataOfCargo.maxW = el.width / 1000
        if (commonDataOfCargo.maxL < el.length / 1000) commonDataOfCargo.maxL = el.length / 1000
    }
    return commonDataOfCargo
}
export type TotalCargoValueType = {
    cargoVolume: number
    cargoMass: number
    maxL: number
    maxH: number
    maxW: number
}

// фильтр траспорта по общему объему и массе вместимого груза( без учета штабелирования и кантования),
// с учетом максимального габаритного размера 1 единицы груза
export const filterTransports = (arr: TransportType[], totalCargoValue: TotalCargoValueType) => {

    return arr.filter(el => {
        const {cargoMass, cargoVolume, maxH, maxL, maxW} = totalCargoValue
        return el.car_m >= cargoMass
            && el.car_o >= cargoVolume
            && el.car_h >= maxH
            && el.car_l >= maxL
            && el.car_w >= maxW
    })
}