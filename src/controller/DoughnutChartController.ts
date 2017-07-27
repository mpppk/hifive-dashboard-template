import {Chart, ChartConfiguration, ChartData, ChartDataSets} from 'chart.js';

export interface IDoughnutChartControllerSetting {
    doughnutChartElementId: string;
}

export const doughnutChartController = {
    __name: 'doughnutChartController',

    initializeDoughnutChart(setting: IDoughnutChartControllerSetting) {
        const doughnutChartCanvas = document.getElementById(setting.doughnutChartElementId) as HTMLCanvasElement;
        const doughnutChartCanvasCtx = doughnutChartCanvas.getContext('2d');

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
        this.doughnutChart.data.datasets[0].data[0] = 100 - prob;
        this.doughnutChart.data.datasets[0].data[1] = prob;
        this.doughnutChart.options.title.text = this.getDoughnutChartTitle(prob);
        this.doughnutChart.update();
    },
};
