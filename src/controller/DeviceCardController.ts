import {doughnutChartController, IDoughnutChartControllerSetting} from './DoughnutChartController';

export interface IDeviceCardSetting {
    doughnutChartControllerSetting: IDoughnutChartControllerSetting;
    currentDeviceImageElementId: string;
    nearestPointImageElementId: string;
}

export const deviceCardController = {
    __name: 'deviceCardController',
    _chartController: doughnutChartController,

    initialize(setting: IDeviceCardSetting) {
        this.setting = setting;
        this._chartController.initializeDoughnutChart(setting.doughnutChartControllerSetting);
    },

    updateDoughnutChart(prob: number) {
        this._chartController.updateDoughnutChart(prob);
    },

    updateCurrentImage(imagePath: string) {
        const currentDeviceImageElementSelector = '#' + this.setting.currentDeviceImageElementId;
        this.$find(currentDeviceImageElementSelector).attr('src', imagePath);
    },

    updateNearestPointImage(imagePath: string) {
        const nearestPointImageElementSelector = '#' + this.setting.nearestPointImageElementId;
        this.$find(nearestPointImageElementSelector).attr('src', imagePath);
    },

};
