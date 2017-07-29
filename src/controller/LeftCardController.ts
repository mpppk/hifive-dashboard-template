import {doughnutChartController, IDoughnutChartControllerSetting} from './DoughnutChartController';
import {IController} from './IController';

export interface ILeftCardSetting {
    doughnutChartControllerSetting: IDoughnutChartControllerSetting;
    topImageElementId: string;
    bottomImageElementId: string;
}

interface ILeftCardController extends IController {
    _chartController: any;
    setting: ILeftCardSetting | null;
    initialize(setting: ILeftCardSetting): void;
    updateDoughnutChart(prob: number): void;
    updateTopImage(imagePath: string): void;
    updateBottomPointImage(imagePath: string): void;
}

export const leftCardController: ILeftCardController = {
    __name: 'leftCardController',
    _chartController: doughnutChartController,
    setting: null,
    initialize(setting: ILeftCardSetting) {
        this.setting = setting;
        this._chartController.initializeDoughnutChart(setting.doughnutChartControllerSetting);
    },

    updateDoughnutChart(prob: number) {
        this._chartController.updateDoughnutChart(prob);
    },

    updateTopImage(imagePath: string) {
        if (this.setting === null) {
            return;
        }

        // FIXME
        if (typeof this.$find === 'undefined') {
            return;
        }

        const topImageElementSelector = '#' + this.setting.topImageElementId;
        this.$find(topImageElementSelector).attr('src', imagePath);
    },

    updateBottomPointImage(imagePath: string) {
        if (this.setting === null) {
            return;
        }

        // FIXME
        if (typeof this.$find === 'undefined') {
            return;
        }

        const bottomImageElementSelector = '#' + this.setting.bottomImageElementId;
        this.$find(bottomImageElementSelector).attr('src', imagePath);
    },
};
