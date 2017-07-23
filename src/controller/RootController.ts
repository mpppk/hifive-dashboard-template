import {chartController} from './ChartController';
import {deviceCardController, IDeviceCardSetting} from './DeviceCardController';
import {IMapSetting, mapController} from './MapController';

export interface IRootControllerParams {
    deviceCardSetting: IDeviceCardSetting;
    mapSetting: IMapSetting;
}

export const rootController = {
    __name: 'rootController',
    _deviceCardController: deviceCardController,
    _mapController: mapController,

    __ready(context) {
        this._mapController.initializeMap(context.args.mapSetting);
        this._deviceCardController.initialize(context.args.deviceCardSetting);
        setTimeout(() => {
            this._deviceCardController.updateHighestProbChart(50);
        }, 2000);
    },
};
