import {Chart, ChartConfiguration, ChartDataSets} from 'chart.js';

export interface IDoughnutChartServiceSetting {
    doughnutChartElementId: string;
    primaryColor: string;
    secondaryColor: string;
    percent: number;
}

export default class DoughnutChartService {
    private static getTitle(percent: number): string {
        return `${percent}%`;
    }

    private _chart: Chart;

    constructor(setting: IDoughnutChartServiceSetting) {
        const doughnutChartCanvas = document.getElementById(setting.doughnutChartElementId) as HTMLCanvasElement;
        const doughnutChartCanvasCtx: CanvasRenderingContext2D | null = doughnutChartCanvas.getContext('2d');

        if (doughnutChartCanvasCtx === null) {
            return;
        }

        const chartDataSet: ChartDataSets = {
            backgroundColor: [
                setting.secondaryColor,
                setting.primaryColor,
            ],
            data: [100 - setting.percent, setting.percent],
        };

        const chartConfiguration: ChartConfiguration = {
            data: {
                datasets: [chartDataSet],
            },
            options: {
                title: {
                    display: true,
                    text: DoughnutChartService.getTitle(setting.percent),
                },
            },
            type: 'doughnut',
        };

        this._chart = new Chart(doughnutChartCanvasCtx, chartConfiguration);
    }

    get chart(): Chart {
        return this._chart;
    }

    set chart(c: Chart) {
        this._chart = c;
    }

    public update(percent: number) {
        if (this.chart === null ||
            typeof this.chart === 'undefined' ||
            typeof this.chart.data === 'undefined' ||
            typeof this.chart.data.datasets === 'undefined' ||
            this.chart.data.datasets.length < 1 ||
            typeof this.chart.data.datasets[0].data === 'undefined' ||
            this.chart.data.datasets[0].data!.length < 2
        ) { return; }

        // FIXME
        this.chart.data.datasets[0].data![0] = 100 - percent;
        this.chart.data.datasets[0].data![1] = percent;
        // FIXME
        (this.chart as any).options.title.text = DoughnutChartService.getTitle(percent);
        this.chart.update();
    }
}
