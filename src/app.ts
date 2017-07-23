import {IMapSetting} from './controller/MapController';

declare const h5: any;

import {IChartControllerSetting} from './controller/ChartController';
import {IDeviceCardSetting} from './controller/DeviceCardController';
import {IRootControllerParams, rootController} from './controller/rootController';

const mapSetting: IMapSetting = {
    latLngExpression: [51.505, -0.09],
    mapElementId: 'mapid',
    tileLayerOptions: {maxZoom: 18},
    tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 13,
};

const chartControllerSetting: IChartControllerSetting = {
    allProbsChartElementId: 'all-probs-chart',
    highestProbChartElementId: 'highest-prob-chart',
};

const deviceCardSetting: IDeviceCardSetting = {
    chartControllerSetting,
    currentDeviceImageElementId: 'current-device-image',
    nearestPointImageElementId: 'nearest-point-image',
};

const rootControllerParams: IRootControllerParams = {
    deviceCardSetting,
    mapSetting,
};

h5.core.controller('#h5container', rootController, rootControllerParams);
