import chartController from './ChartController';
import {IMapSetting, mapController} from './MapController';

export interface IRootControllerParams {
    allProbsChartElementId: string;
    highestProbChartElementId: string;
    mapSetting: IMapSetting;
}

export const rootController = {
    __name: 'rootController',
    _chartController: chartController,
    _mapController: mapController,

    __ready(context) {
        this._mapController.initializeMap(context.args.mapSetting);
        this._chartController.initializeHighestProbChart(context.args.highestProbChartElementId);
        this._chartController.initializeAllProbsChart(context.args.allProbsChartElementId);
        setTimeout(() => {
            this._chartController.updateHighestProbChart(50);
        }, 2000);
    },
};
