import {chartController, IChartControllerSetting} from './ChartController';

export interface IDeviceCardSetting {
    chartControllerSetting: IChartControllerSetting;
    currentDeviceImageElementId: string;
    nearestPointImageElementId: string;
}

export const deviceCardController = {
    __name: 'deviceCardController',
    _chartController: chartController,

    initialize(setting: IDeviceCardSetting) {
        this.setting = setting;
        this._chartController.initializeHighestProbChart(setting.chartControllerSetting);
        this._chartController.initializeAllProbsChart(setting.chartControllerSetting);
    },

    updateHighestProbChart(prob: number) {
        this._chartController.updateHighestProbChart(prob);
    },

    updateCurrentImage(imagePath: string) {
        const imgDom: HTMLImageElement = this.$find(this.mapSetting.currentDeviceImageElementId);

    },

    updateNearestPointImage(imagePath: string) {
        this.$find(this.mapSetting.nearestPointImageElementId);
    },

};
