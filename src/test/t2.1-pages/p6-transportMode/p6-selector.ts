import {AppRootStateType} from '../../../main/m2-bll/store';
import {TransportType} from '../../../main/m3-dal/api-service';


export const getTransports = (state:AppRootStateType):TransportType[]=>{
    return  state.pageSix.transports
}
