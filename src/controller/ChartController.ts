import {Chart, ChartConfiguration, ChartData, ChartDataSets} from 'chart.js';

export interface IChartControllerSetting {
    allProbsChartElementId: string;
    highestProbChartElementId: string;
}

export const chartController = {
    __name: 'chartController',

    initializeHighestProbChart(setting: IChartControllerSetting) {
        const highestProbChartCanvas = document.getElementById(setting.highestProbChartElementId) as HTMLCanvasElement;
        const highestProbChartCanvasCtx = highestProbChartCanvas.getContext('2d');

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
                    text: this.getHighestProbChartTitle(0),
                },
            },
            type: 'doughnut',
        };

        this.highestProbChart = new Chart(highestProbChartCanvasCtx, chartConfiguration);
    },

    getHighestProbChartTitle(prob: number): string {
        return `${prob}%`;
    },

    updateHighestProbChart(prob: number) {
        this.highestProbChart.data.datasets[0].data[0] = 100 - prob;
        this.highestProbChart.data.datasets[0].data[1] = prob;
        this.highestProbChart.options.title.text = this.getHighestProbChartTitle(prob);
        this.highestProbChart.update();
    },

    initializeAllProbsChart(setting: IChartControllerSetting) {
        const allProbsChartCanvas = document.getElementById(setting.allProbsChartElementId) as HTMLCanvasElement;
        const ctx = allProbsChartCanvas.getContext('2d');

        const dataset = {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            data: [12, 19, 3, 5, 2, 3],
            label: '# of Votes',
        };

        this.allProbsChart = new Chart(ctx, {
            data:  {
                datasets: [dataset],
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            },
            options: {},
            type: 'bar',
        });
    },
};
