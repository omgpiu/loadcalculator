import {CustomerCargo} from '../../t2-pages/p3-stepThree/pageThree-reducer';

export const calculator = (arr: CustomerCargo[]) => {
    //считает общий объем и массу груза введенного на странице 2 ,
    // включая количетсво штук каждого груза (входные параметры "мм" и "кг" выходные "м.куб" и "тонны")
    let commonDataOfCargo:TotalCargoValueType = {CargoVolume: 0, CargoMass: 0}
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        commonDataOfCargo.CargoMass += +((el.mass * el.quantity) / 1000).toFixed(3)
        commonDataOfCargo.CargoVolume += +((el.height  * el.length  * el.width / 1e9) * el.quantity).toFixed(3)
    }
    console.log(commonDataOfCargo)
    return commonDataOfCargo
}
export type TotalCargoValueType = {
    CargoVolume: number
    CargoMass: number
}