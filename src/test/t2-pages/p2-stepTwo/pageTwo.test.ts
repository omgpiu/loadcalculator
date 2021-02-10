import {pageTwoReducer, setPackagingCargo} from './pageTwo-reducer';
import box from '../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from '../../../assets/images/i2-pagetwo/big_bag.jpg';

let startState: any

beforeEach(() => {
    startState = {
        totalCargoValue:{
          cargoMass:1,
          cargoVolume:1,
          maxH:1,
          maxL:1,
          maxW:1
        },
        packagingCargo: [],
        packagingItems: [
            {
                id: '11',
                img: box,
                title: 'КОРОБКИ',
                width: 1000,
                height: 1000,
                length: 1000,
                diameter: 1,
                volume: 1,
                weight: 100,
                amount: 10,
            },
            {
                id: '12',
                img: bigBag,
                title: 'БИГ БЭГИ',
                width: 1000,
                height: 1000,
                length: 1000,
                diameter: 1,
                volume: 1,
                weight: 100, amount: 10,

            }]

    };
});


test('Add new cargo item', () => {
    const action = setPackagingCargo({id: '11'});
    const newState = pageTwoReducer(startState, action);
    expect(newState.packagingCargo.length).toBe(1);
    expect(newState.packagingCargo.length).not.toBe(0);
    expect(newState.packagingCargo[0].id).toBe('11');

});
