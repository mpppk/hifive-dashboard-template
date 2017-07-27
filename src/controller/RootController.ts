import {polyfill} from 'es6-promise';
polyfill();
import {barChartController, IBarChartControllerSetting} from './BarChartController';
import {deviceCardController, IDeviceCardSetting} from './DeviceCardController';
import {IMapSetting, mapController, MapMarkerIconType} from './MapController';

export interface IRootControllerParams {
    barChartSetting: IBarChartControllerSetting;
    deviceCardSetting: IDeviceCardSetting;
    mapSetting: IMapSetting;
}

export const rootController = {
    __name: 'rootController',
    _barChartController: barChartController,
    _deviceCardController: deviceCardController,
    _mapController: mapController,

    __ready(context) {
        this._mapController.initializeMap(context.args.mapSetting);
        this._deviceCardController.initialize(context.args.deviceCardSetting);
        setTimeout(() => {
            this._deviceCardController.updateDoughnutChart(50);
            this._deviceCardController.updateCurrentImage('dog.png');
            this._deviceCardController.updateNearestPointImage('dog.png');
            this._barChartController.initializeBarChart(context.args.barChartSetting);
            this._mapController.updatePosition([51.5, -0.1]);
            this._mapController.updateMarkerIcon(MapMarkerIconType.Black);
        }, 2000);
        this.polling();
    },

    polling() {
        const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
        const wait = async () => {
            while (true) {
                // your ajax code
                await sleep(2000);
            }
        };
        wait();
    },
};
