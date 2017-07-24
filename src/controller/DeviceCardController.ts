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
        const currentDeviceImageElementSelector = '#' + this.setting.currentDeviceImageElementId;
        const dom = this.$find(currentDeviceImageElementSelector).attr('src', imagePath);
    },

    updateNearestPointImage(imagePath: string) {
        const nearestPointImageElementSelector = '#' + this.setting.nearestPointImageElementId;
        const dom = this.$find(nearestPointImageElementSelector).attr('src', imagePath);
    },

};
