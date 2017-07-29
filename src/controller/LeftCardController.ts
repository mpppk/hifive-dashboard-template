import {IController} from './IController';
import {IPercentChartControllerSetting, percentChartController} from './PercentChartController';

export interface ILeftCardSetting {
    percentChartControllerSetting: IPercentChartControllerSetting;
    topImageElementId: string;
    bottomImageElementId: string;
}

interface ILeftCardController extends IController {
    _percentChartController: any;
    setting: ILeftCardSetting | null;
    initialize(setting: ILeftCardSetting): void;
    updatePercentChart(percent: number): void;
    updateTopImage(imagePath: string): void;
    updateBottomPointImage(imagePath: string): void;
}

export const leftCardController: ILeftCardController = {
    __name: 'leftCardController',
    _percentChartController: percentChartController,
    setting: null,
    initialize(setting: ILeftCardSetting) {
        this.setting = setting;
        this._percentChartController.initialize(setting.percentChartControllerSetting);
    },

    updatePercentChart(percent: number) {
        this._percentChartController.update(percent);
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
