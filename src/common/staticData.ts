import fin from '../assets/images/pageFive/fin.png';
import eur from '../assets/images/pageFive/eur.jpg';
import e_box from '../assets/images/pageFive/e-box.jpg';
import cargo_small from '../assets/images/pageFive/cargo_small.jpg';
import cargo_base from '../assets/images/pageFive/CARGO_BASE.webp';
import {v1} from 'uuid';
import ten_foot from '../assets/images/transport/containers/10foot.jpg';
import twenty_foot from '../assets/images/transport/containers/20foot.jpg';
import forty_foot_OT from '../assets/images/transport/containers/40OT.jpg';
import forty_foot from '../assets/images/transport/containers/40foot.png';
import fortyFive_foot from '../assets/images/transport/containers/45foot.jpg';
import porter from '../assets/images/transport/auto/porter.jpg';
import gazel from '../assets/images/transport/auto/gazel.png';
import gazel_ from '../assets/images/transport/auto/gazel+.png';
import maz_kamaz from '../assets/images/transport/auto/maz_kamaz.png';
import fura from '../assets/images/transport/auto/fura.jpg';
import fura2 from '../assets/images/transport/auto/fura2.jpg';
import fura_scep from '../assets/images/transport/auto/fura_scep.jpg';
import {PackagingItemType, PalletType, TransportType} from './types';
import box from '../assets/images/i2-pagetwo/box.jpg';
import bigBag from '../assets/images/i2-pagetwo/big_bag.jpg';
import pallet from '../assets/images/i2-pagetwo/pallet.jpg';
import pipe from '../assets/images/i2-pagetwo/pipes.jpg';
import tire from '../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from '../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from '../assets/images/i2-pagetwo/steel-barrel.jpg';

// p2
export const packagingBags: PackagingItemType[] = [
    {
        id: '11',
        bagType: 'КОРОБКИ',
        cargoTitle: 'КОРОБКИ',
        width: 500,
        height: 500,
        length: 500,
        diameter: 0,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false,
        img: box,
    },
    {
        id: '12',
        img: bigBag,
        bagType: 'БИГ БЭГИ',
        cargoTitle: 'БИГ БЭГИ',
        width: 500,
        height: 500,
        length: 500,
        diameter: 0,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false

    },
    {
        id: '13',
        img: pallet,
        bagType: 'ПАЛЛЕТЫ',
        cargoTitle: 'ПАЛЛЕТЫ',
        width: 500,
        height: 500,
        length: 500,
        diameter: 0,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false
    },
    {
        id: '14',
        img: pipe,
        bagType: 'ТРУБЫ',
        cargoTitle: 'ТРУБЫ',
        width: 0,
        height: 1000,
        length: 0,
        diameter: 500,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false
    },
    {
        id: '15',
        img: tire,
        bagType: 'ШИНЫ',
        cargoTitle: 'ШИНЫ',
        width: 0,
        height: 200,
        length: 0,
        diameter: 500,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false
    },
    {
        id: '16',
        img: woodenBox,
        bagType: 'ЯЩИКИ',
        cargoTitle: 'ЯЩИКИ',
        width: 500,
        height: 500,
        length: 500,
        diameter: 0,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false
    },
    {
        id: '17',
        img: barrel,
        bagType: 'БОЧКИ',
        cargoTitle: 'БОЧКИ',
        width: 0,
        height: 1000,
        length: 0,
        diameter: 500,
        weight: 10,
        amount: 1,
        inHeight: false,
        inLength: false,
        inWidth: false,
        isStack: false
    },
]

//page 4
export const palletsData: PalletType[] = [
    {
        id: '1',
        typePallet: 'FIN',
        length: 1000,
        width: 1000,
        height: 150,
        carryingCapacity: 1000,
        maxLoadingHeight: 2000,
        separatorSheetHeight: 50,
        img: fin
    },
    {
        id: '2',
        typePallet: 'EUR',
        length: 1100,
        width: 1100,
        height: 160,
        carryingCapacity: 1100,
        maxLoadingHeight: 2100,
        separatorSheetHeight: 60,
        img: eur,
    },
    {
        id: '3',
        typePallet: 'E-BOX',
        length: 1200,
        width: 1200,
        height: 170,
        carryingCapacity: 1200,
        maxLoadingHeight: 2200,
        separatorSheetHeight: 70,
        img: e_box,
    },
    {
        id: '4',
        typePallet: 'CARGO_SMALL',
        length: 1300,
        width: 1300,
        height: 180,
        carryingCapacity: 1300,
        maxLoadingHeight: 2300,
        separatorSheetHeight: 80,
        img: cargo_small,
    },
    {
        id: '5',
        typePallet: 'CARGO_BASE',
        length: 1400,
        width: 1400,
        height: 190,
        carryingCapacity: 1400,
        maxLoadingHeight: 2400,
        separatorSheetHeight: 90,
        img: cargo_base,
    },
];

//page 6 transport mode container
export const containerData = [
    {
        id: v1(),
        car_name: 'Контейнер 10"DC',
        car_char: '(2.83x2.33x2.37) 15m3',
        car_o: 15,
        car_l: 2.83,
        car_w: 2.33,
        car_h: 2.37,
        car_m: 11,
        img: ten_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 20"OT',
        car_char: '(5.41x2.2x2.28) 32m3',
        car_o: 32,
        car_l: 5.41,
        car_w: 2.2,
        car_h: 2.28,
        car_m: 22,
        img: twenty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 20"DC',
        car_char: '(5.9x2.35x2.38) 33.2m3',
        car_o: 33.2,
        car_l: 5.9,
        car_w: 2.35,
        car_h: 2.38,
        car_m: 22,
        img: twenty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 20"PW',
        car_char: '(5.95x2.4x2.38) 34.6m3',
        car_o: 34.6,
        car_l: 5.95,
        car_w: 2.4,
        car_h: 2.38,
        car_m: 22,
        img: twenty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 20"HC',
        car_char: '(5.91x2.35x2.68) 38.5m3',
        car_o: 38.5,
        car_l: 5.91,
        car_w: 2.35,
        car_h: 2.68,
        car_m: 22,
        img: twenty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 40"OT',
        car_char: '(11.54x2.35x2.38) 65.5m3',
        car_o: 65.5,
        car_l: 11.54,
        car_w: 2.35,
        car_h: 2.38,
        car_m: 27,
        img: forty_foot_OT
    },
    {
        id: v1(),
        car_name: 'Контейнер 40"DC',
        car_char: '(12.04x2.3x2.37) 67.5m3',
        car_o: 67.5,
        car_l: 12.04,
        car_w: 2.3,
        car_h: 2.37,
        car_m: 27,
        img: forty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 40"PW',
        car_char: '(12.04x2.43x2.37) 70.5m3',
        car_o: 70.5,
        car_l: 12.04,
        car_w: 2.43,
        car_h: 2.37,
        car_m: 27,
        img: forty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 40"HC',
        car_char: '(12.05x2.34x2.68) 75.6m3',
        car_o: 75.6,
        car_l: 12.05,
        car_w: 2.34,
        car_h: 2.68,
        car_m: 27,
        img: forty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 40"HCPW',
        car_char: '(12.1x2.42x2.69) 79.1m3',
        car_o: 79.1,
        car_l: 12.1,
        car_w: 2.42,
        car_h: 2.69,
        car_m: 27,
        img: forty_foot
    },
    {
        id: v1(),
        car_name: 'Контейнер 45"HCPW',
        car_char: '(13.55x2.4x2.56) 85.1m3',
        car_o: 85.1,
        car_l: 13.55,
        car_w: 2.4,
        car_h: 2.56,
        car_m: 29,
        img: fortyFive_foot
    },
    {
        id: 12,
        car_name: 'Контейнер 45"HC',
        car_char: '(13.55x2.35x2.69) 86m3',
        car_o: 86,
        car_l: 13.55,
        car_w: 2.35,
        car_h: 2.69,
        car_m: 29,
        img: fortyFive_foot
    }
] as TransportType[];

//page 6 transport mode aut
export const autoData = [
    {
        id: v1(),
        car_name: 'Портер',
        car_char: '(2.65x1.5x1.6) 6м3',
        car_o: 6,
        car_l: 2.65,
        car_w: 1.5,
        car_h: 1.6,
        car_m: 1,
        img: porter
    },
    {
        id: v1(),
        car_name: 'Газель',
        car_char: '(3x1.95x1.6) 9м3',
        car_o: 9,
        car_l: 3,
        car_w: 1.95,
        car_h: 1.6,
        car_m: 1.5,
        img: gazel
    },
    {
        id: v1(),
        car_name: 'Газель',
        car_char: '(4x2x1.9) 15м3',
        car_o: 15,
        car_l: 4,
        car_w: 2,
        car_h: 1.9,
        car_m: 1.5,
        img: gazel_
    },
    {
        id: v1(),
        car_name: 'Маз, Камаз',
        car_char: '(6x2.4x2.35) 30м3',
        car_o: 30,
        car_l: 6,
        car_w: 2.4,
        car_h: 2.35,
        car_m: 10,
        img: maz_kamaz
    },
    {
        id: v1(),
        car_name: 'Маз, Камаз',
        car_char: '(9x2.4x2.35) 45м3',
        car_o: 45,
        car_l: 9,
        car_w: 2.4,
        car_h: 2.35,
        car_m: 10,
        img: maz_kamaz
    },
    {
        id: v1(),
        car_name: 'Фура',
        car_char: '(13.6x2.45x2.65) 82м3',
        car_o: 82,
        car_l: 13.6,
        car_w: 2.45,
        car_h: 2.65,
        car_m: 20,
        img: fura
    },
    {
        id: v1(),
        car_name: 'Фура',
        car_char: '(13.6x2.5x2.7) 90м3',
        car_o: 90,
        car_l: 13.6,
        car_w: 2.5,
        car_h: 2.7,
        car_m: 20,
        img: fura2
    },
    {
        id: v1(),
        car_name: 'Фура сцепка',
        car_char: '(7.2x2.45x3) 120м3',
        car_o: 120,
        car_l: 7.2,
        car_w: 2.45,
        car_h: 3,
        car_m: 20,
        img: fura_scep
    },
] as TransportType[];