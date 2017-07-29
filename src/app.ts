import {IMapSetting, MapMarkerIconType} from './controller/MapController';

declare const h5: any;

import {IBarChartControllerSetting} from './controller/BarChartController';
import {ILeftCardSetting} from './controller/LeftCardController';
import {IPercentChartControllerSetting} from './controller/PercentChartController';
import {IRootControllerParams, rootController} from './controller/rootController';

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

const percentChartControllerSetting: IPercentChartControllerSetting = {
    percentChartServiceSetting: {
        percent: 0,
        percentChartElementId: 'doughnut-chart',
        primaryColor: 'rgba(75, 192, 192, 1)',
        secondaryColor: 'rgba(75, 192, 192, 0.2)',
    },
};

const deviceCardSetting: ILeftCardSetting = {
    bottomImageElementId: 'nearest-point-image',
    percentChartControllerSetting,
    topImageElementId: 'current-device-image',
};

const rootControllerParams: IRootControllerParams = {
    barChartSetting,
    leftCardSetting: deviceCardSetting,
    mapSetting,
};

h5.core.controller('#h5container', rootController, rootControllerParams);
