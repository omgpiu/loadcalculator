

//p6
export type TransportType = {
    id: string
    car_name: string
    car_char: string
    car_o: number
    car_l: number
    car_w: number
    car_h: number
    car_m: number
    img: string
};

//p4
export type PalletType = {
    id: string
    typePallet: string
    length: number
    width: number
    height: number
    carryingCapacity: number
    maxLoadingHeight: number
    separatorSheetHeight: number
    img?: any
};

//p3
export type PayloadTypeForLoading = 'pallets' | 'no_pallets'


//p2
export type PackagingItemType = {
    id: string
    bagType: BagType
    cargoTitle: string
    width: number
    height: number
    length: number
    diameter: number
    weight: number
    amount: number
    inHeight: boolean
    inLength: boolean
    inWidth: boolean
    isStack: boolean
    img: string
}
export type TotalCargoValueType = {
    cargoVolume: number
    cargoMass: number
    maxL: number
    maxH: number
    maxW: number
}
export type CargoParamType = 'height' | 'width' | 'length' | 'diameter' | 'volume' | 'weight' | 'amount' | 'cargoTitle'
export type NameType = 'inHeight' | 'inLength' | 'inWidth'
export type BagType = 'КОРОБКИ' | 'БИГ БЭГИ' | 'ПАЛЛЕТЫ' | 'ТРУБЫ' | 'ШИНЫ' | 'ЯЩИКИ' | 'БОЧКИ';