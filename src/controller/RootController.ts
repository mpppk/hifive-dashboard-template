import chartController from './ChartController';
import {IMapSetting, mapController} from './MapController';

export interface IRootControllerParams {
    highestProbChartElementId: string;
    mapSetting: IMapSetting;
}

export const rootController = {
    __name: 'rootController',
    _chartController: chartController,
    _mapController: mapController,

    __ready(context) {
        this._mapController.initializeMap(context.args.mapSetting);
    },
};
