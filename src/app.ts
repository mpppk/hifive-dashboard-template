import {IMapSetting} from './controller/MapController';

declare const h5: any;

import {IRootControllerParams, rootController} from './controller/rootController';

const mapSetting: IMapSetting = {
    latLngExpression: [51.505, -0.09],
    mapElementId: 'mapid',
    tileLayerOptions: {maxZoom: 18},
    tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 13,
};

const rootControllerParams: IRootControllerParams = {
    allProbsChartElementId: 'all-probs-chart',
    highestProbChartElementId: 'highest-prob-chart',
    mapSetting,
};

h5.core.controller('#h5container', rootController, rootControllerParams);
