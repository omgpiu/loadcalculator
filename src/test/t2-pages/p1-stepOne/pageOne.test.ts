import {InitialPageOneStateType} from './pageOne-reducer';
import {UploadFileStatus} from 'antd/lib/upload/interface';


let startState: InitialPageOneStateType;

beforeEach(() => {
    startState = {
        loadPlace: 'Грузовик',
        isUpload: '' as UploadFileStatus
    };
});


test('Change load place', () => {
    // const action = setLoadPlace({loadPlace: 'Контейнер'});
    // const newState = pageOneReducer(startState, action);
    // expect(newState.loadPlace).not.toBe('Грузовик');
    // expect(newState.loadPlace).toBe('Контейнер');

});
