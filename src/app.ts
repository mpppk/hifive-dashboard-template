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
    barChartServiceSetting: {
        backgroundColors: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        barChartElementId: 'bar-chart',
        borderColors: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        data: [12, 19, 3, 5, 2, 3],
        datasetLabel: 'sample label',
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    },
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
