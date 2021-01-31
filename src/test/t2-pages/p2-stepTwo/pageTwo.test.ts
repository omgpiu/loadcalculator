import {InitialStatePageTwoType, pageTwoReducer, setPackagingCargo} from './pageTwo-reducer';
import box from '../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from '../../../assets/images/i2-pagetwo/big_bag.jpg';

let startState: InitialStatePageTwoType

beforeEach(() => {
    startState = {
        packagingCargo: [],
        packagingItems: [
            {
                id: 11,
                img: box,
                title: 'КОРОБКИ',
                width: 1000,
                height: 1000,
                length: 1000,
                diameter: undefined,
                volume: undefined,
                weight: 100
            },
            {
                id: 12,
                img: bigBag,
                title: 'БИГ БЭГИ',
                width: 1000,
                height: 1000,
                length: 1000,
                diameter: undefined,
                volume: undefined,
                weight: 100,

            }]

    };
});


test('Add new cargo item', () => {
    const action = setPackagingCargo({id: 11});
    const newState = pageTwoReducer(startState, action)
    expect(newState.packagingCargo.length).toBe(1)
    expect(newState.packagingCargo.length).not.toBe(0)
    expect(newState.packagingCargo[0].id).toBe(11)

});
