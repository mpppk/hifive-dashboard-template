import {IMapSetting, MapMarkerIconType} from './controller/MapController';

declare const h5: any;

import {ILeftCardSetting} from './controller/LeftCardController';
import {IDoughnutChartControllerSetting} from './controller/DoughnutChartController';
import {IRootControllerParams, rootController} from './controller/rootController';
import {IBarChartControllerSetting} from './controller/BarChartController';

const mapSetting: IMapSetting = {
    iconType: MapMarkerIconType.White,
    mapElementId: 'mapid',
    markerPosition: [51.5, -0.09],
    position: [51.505, -0.09],
    tileLayerOptions: {maxZoom: 18},
    tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 13,
};

const barChartSetting: IBarChartControllerSetting = {
    barChartElementId: 'bar-chart',
};

const doughnutChartControllerSetting: IDoughnutChartControllerSetting = {
    doughnutChartElementId: 'doughnut-chart',
};

const deviceCardSetting: ILeftCardSetting = {
    topImageElementId: 'current-device-image',
    doughnutChartControllerSetting,
    bottomImageElementId: 'nearest-point-image',
};

const rootControllerParams: IRootControllerParams = {
    barChartSetting,
    deviceCardSetting,
    mapSetting,
};

h5.core.controller('#h5container', rootController, rootControllerParams);
