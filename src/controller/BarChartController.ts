import {Chart, ChartConfiguration, ChartData, ChartDataSets} from 'chart.js';

export interface IBarChartControllerSetting {
    barChartElementId: string;
}

export const barChartController = {
    __name: 'barChartController',
    initializeBarChart(setting: IBarChartControllerSetting) {
        const barChartCanvas = document.getElementById(setting.barChartElementId) as HTMLCanvasElement;
        const ctx = barChartCanvas.getContext('2d');

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

        this.barChart = new Chart(ctx, {
            data:  {
                datasets: [dataset],
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            },
            options: {},
            type: 'bar',
        });
    },
};
