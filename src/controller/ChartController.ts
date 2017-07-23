import * as Chart from 'chart.js';

const chartController = {
    __name: 'chartController',

    __ready(context) {
        const highestProbChartCanvas = document.getElementById('highest-prob-chart') as HTMLCanvasElement;
        const highestProbChartCanvasCtx = highestProbChartCanvas.getContext('2d');
        const highestProbChart = new Chart(highestProbChartCanvasCtx, {
            data: {
                datasets: [{
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 1)',
                    ],

                    data: [20, 80],
                }],
            },
            options: {
                title: {
                    display: true,
                    text: '一致率: 80%',
                },
            },
            type: 'doughnut',
        });

        const allProbsChartCanvas = document.getElementById('all-probs-chart') as HTMLCanvasElement;
        const ctx = allProbsChartCanvas.getContext('2d');
        const allProbsChart = new Chart(ctx, {
            data: {
                datasets: [{
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
                }],
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                    }],
                },
            },
            type: 'bar',
        });
    },
};

export default chartController;
