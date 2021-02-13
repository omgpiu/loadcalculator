import {InitialPageOneStateType} from './pageOne-reducer';


let startState: InitialPageOneStateType;

beforeEach(() => {
    startState = {
        loadPlace: 'Грузовик',
        isUpload: 'done'
    };
});


test('Change load place', () => {
    // const action = setLoadPlace({loadPlace: 'Контейнер'});
    // const newState = pageOneReducer(startState, action);
    // expect(newState.loadPlace).not.toBe('Грузовик');
    // expect(newState.loadPlace).toBe('Контейнер');

});
