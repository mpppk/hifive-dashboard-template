import {Chart, ChartConfiguration, ChartDataSets} from 'chart.js';
import {IController} from './IController';

export interface IDoughnutChartControllerSetting {
    doughnutChartElementId: string;
}

interface IDoughnutChartController extends IController {
    doughnutChart: Chart | null;
    initializeDoughnutChart(setting: IDoughnutChartControllerSetting): void;
    getDoughnutChartTitle(prob: number): string;
    updateDoughnutChart(prob: number): void;
}

export const doughnutChartController: IDoughnutChartController = {
    __name: 'doughnutChartController',
    doughnutChart: null,
    initializeDoughnutChart(setting: IDoughnutChartControllerSetting) {
        const doughnutChartCanvas = document.getElementById(setting.doughnutChartElementId) as HTMLCanvasElement;
        const doughnutChartCanvasCtx: CanvasRenderingContext2D | null = doughnutChartCanvas.getContext('2d');

        if (doughnutChartCanvasCtx === null) {
            return;
        }

        const chartDataSet: ChartDataSets = {
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 1)',
            ],
            data: [100, 0],
        };

        const chartConfiguration: ChartConfiguration = {
            data: {
                datasets: [chartDataSet],
            },
            options: {
                title: {
                    display: true,
                    text: this.getDoughnutChartTitle(0),
                },
            },
            type: 'doughnut',
        };

        this.doughnutChart = new Chart(doughnutChartCanvasCtx, chartConfiguration);
    },

    getDoughnutChartTitle(prob: number): string {
        return `${prob}%`;
    },

    updateDoughnutChart(prob: number) {
        if (this.doughnutChart === null ||
            typeof this.doughnutChart === 'undefined' ||
            typeof this.doughnutChart.data === 'undefined' ||
            typeof this.doughnutChart.data.datasets === 'undefined' ||
            this.doughnutChart.data.datasets.length < 1 ||
            typeof this.doughnutChart.data.datasets[0].data === 'undefined' ||
            this.doughnutChart.data.datasets[0].data!.length < 2
        ) { return; }

        // FIXME
        this.doughnutChart.data.datasets[0].data![0] = 100 - prob;
        this.doughnutChart.data.datasets[0].data![1] = prob;
        // this.doughnutChart.options.title.text = this.getDoughnutChartTitle(prob);
        this.doughnutChart.update();
    },
};
