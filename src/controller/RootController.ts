import {polyfill} from 'es6-promise';
polyfill();
import {barChartController, IBarChartControllerSetting} from './BarChartController';
import {ILeftCardSetting, leftCardController} from './LeftCardController';
import {IMapSetting, mapController, MapMarkerIconType} from './MapController';

export interface IRootControllerParams {
    barChartSetting: IBarChartControllerSetting;
    leftCardSetting: ILeftCardSetting;
    mapSetting: IMapSetting;
}

export const rootController = {
    __name: 'rootController',
    _barChartController: barChartController,
    _leftCardController: leftCardController,
    _mapController: mapController,

    __ready(context: any) {
        this._mapController.initializeMap(context.args.mapSetting);
        this._leftCardController.initialize(context.args.leftCardSetting);
        setTimeout(() => {
            this._leftCardController.updatePercentChart(50);
            this._leftCardController.updateTopImage('dog.png');
            this._leftCardController.updateBottomPointImage('dog.png');
            this._barChartController.initialize(context.args.barChartSetting);
            this._mapController.updatePosition([51.5, -0.1]);
            this._mapController.updateMarkerIcon(MapMarkerIconType.Black);
        }, 2000);
        this.polling();
    },

    polling() {
        const sleep = (n: number) => new Promise((resolve) => setTimeout(resolve, n));
        const wait = async () => {
            while (true) {
                // your ajax code
                await sleep(2000);
            }
        };
        wait();
    },
};
