import DoughnutChartService from '../service/DoughnutChartService';
import {IController} from './IController';

export interface IDoughnutChartControllerSetting {
    doughnutChartElementId: string;
}

interface IDoughnutChartController extends IController {
    doughnutChartService: DoughnutChartService | null;
    initializeDoughnutChart(setting: IDoughnutChartControllerSetting): void;
    updateDoughnutChart(prob: number): void;
}

export const doughnutChartController: IDoughnutChartController = {
    __name: 'doughnutChartController',
    doughnutChartService: null,
    initializeDoughnutChart(setting: IDoughnutChartControllerSetting) {
        this.doughnutChartService = new DoughnutChartService( {
            doughnutChartElementId: setting.doughnutChartElementId,
            percent: 0,
            primaryColor: 'rgba(75, 192, 192, 1)',
            secondaryColor: 'rgba(75, 192, 192, 0.2)',
        });
    },

    updateDoughnutChart(percent: number) {
        this.doughnutChartService!.update(percent);
    },
};
