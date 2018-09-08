// import {polyfill} from 'es6-promise';
// import Promise = require('es6-promise').Promise;
// polyfill();
import DummyDataService from '../service/DummyDataService';
import {
  barChartController,
  IBarChartControllerSetting,
} from './BarChartController';
import { ILeftCardSetting, leftCardController } from './LeftCardController';
import { IMapSetting, mapController, MapMarkerIconType } from './MapController';

export interface IRootControllerParams {
  barChartSetting: IBarChartControllerSetting;
  leftCardSetting: ILeftCardSetting;
  mapSetting: IMapSetting;
}

export const rootController = {
  __name: 'rootController',
  _barChartController: barChartController,
  _dummyDataService: new DummyDataService(),
  _leftCardController: leftCardController,
  _mapController: mapController,
  __ready(context: any) {
    this._mapController.initializeMap(context.args.mapSetting);
    this._mapController.updateMarkerIcon(MapMarkerIconType.Black);
    this._leftCardController.initialize(context.args.leftCardSetting);
    this._barChartController.initialize(context.args.barChartSetting);
    this._leftCardController.updateTopImage('dog.png');
    this._leftCardController.updateBottomPointImage('dog.png');
    this.polling();
  },

  polling() {
    const sleep = (n: number) => new Promise((resolve) => setTimeout(resolve, n));
    const wait = async () => {
      while (true) {
        const dummyData = this._dummyDataService.update();
        this._leftCardController.updatePercentChart(dummyData.percent);
        this._mapController.updatePosition(dummyData.markerPosition);
        this._barChartController.update(dummyData.barChartData);
        await sleep(2000);
      }
    };
    wait();
  },
};
