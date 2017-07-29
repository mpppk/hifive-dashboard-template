import {IPercentChartServiceSetting, PercentChartService} from '../service/PercentChartService';
import {IController} from './IController';

export interface IPercentChartControllerSetting {
    percentChartServiceSetting: IPercentChartServiceSetting;
}

interface IPercentChartController extends IController {
    percentChartService: PercentChartService | null;
    initialize(setting: IPercentChartControllerSetting): void;
    update(prob: number): void;
}

export const percentChartController: IPercentChartController = {
    __name: 'percentChartController',
    percentChartService: null,
    initialize(setting: IPercentChartControllerSetting) {
        this.percentChartService = new PercentChartService(setting.percentChartServiceSetting);
    },

    update(percent: number) {
        this.percentChartService!.update(percent);
    },
};
