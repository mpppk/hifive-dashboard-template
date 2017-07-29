import {doughnutChartController, IDoughnutChartControllerSetting} from './DoughnutChartController';
import {IController} from './IController';

export interface IDeviceCardSetting {
    doughnutChartControllerSetting: IDoughnutChartControllerSetting;
    currentDeviceImageElementId: string;
    nearestPointImageElementId: string;
}

interface IDeviceCardController extends IController {
    _chartController: any;
    setting: IDeviceCardSetting | null;
    initialize(setting: IDeviceCardSetting): void;
    updateDoughnutChart(prob: number): void;
    updateCurrentImage(imagePath: string): void;
    updateNearestPointImage(imagePath: string): void;
}

export const deviceCardController: IDeviceCardController = {
    __name: 'deviceCardController',
    _chartController: doughnutChartController,
    setting: null,
    initialize(setting: IDeviceCardSetting) {
        this.setting = setting;
        this._chartController.initializeDoughnutChart(setting.doughnutChartControllerSetting);
    },

    updateDoughnutChart(prob: number) {
        this._chartController.updateDoughnutChart(prob);
    },

    updateCurrentImage(imagePath: string) {
        if (this.setting === null) {
            return;
        }

        // FIXME
        if (typeof this.$find === 'undefined') {
            return;
        }

        const currentDeviceImageElementSelector = '#' + this.setting.currentDeviceImageElementId;
        this.$find(currentDeviceImageElementSelector).attr('src', imagePath);
    },

    updateNearestPointImage(imagePath: string) {
        if (this.setting === null) {
            return;
        }

        // FIXME
        if (typeof this.$find === 'undefined') {
            return;
        }

        const nearestPointImageElementSelector = '#' + this.setting.nearestPointImageElementId;
        this.$find(nearestPointImageElementSelector).attr('src', imagePath);
    },
};
