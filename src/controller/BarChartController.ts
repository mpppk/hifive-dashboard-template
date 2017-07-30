import {BarChartService, IBarChartServiceSetting} from '../service/BarChartService';
import {IController} from './IController';

export interface IBarChartControllerSetting {
    barChartServiceSetting: IBarChartServiceSetting;
}

interface IBarChartController extends IController {
    barChartService: BarChartService | null;
    initialize(setting: IBarChartControllerSetting): void;
    update(data: number[]): void;
}

export const barChartController: IBarChartController = {
    __name: 'barChartController',
    barChartService: null,
    initialize(setting: IBarChartControllerSetting) {
        this.barChartService = new BarChartService(setting.barChartServiceSetting);
    },

    update(data: number[]) {
        if (this.barChartService === null) {
            return;
        }
        this.barChartService.update(data);
    },
};
