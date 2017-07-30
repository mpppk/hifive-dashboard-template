import {Chart, ChartConfiguration, ChartDataSets} from 'chart.js';

export interface IPercentChartServiceSetting {
    percentChartElementId: string;
    primaryColor: string;
    secondaryColor: string;
    percent: number;
}

export class PercentChartService {
    private static getTitle(percent: number): string {
        return `${Math.round(percent * 10) / 10}%`;
    }

    private _chart: Chart;

    constructor(setting: IPercentChartServiceSetting) {
        const percentChartCanvas = document.getElementById(setting.percentChartElementId) as HTMLCanvasElement;
        const percentChartCanvasCtx: CanvasRenderingContext2D | null = percentChartCanvas.getContext('2d');

        if (percentChartCanvasCtx === null) {
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
                    text: PercentChartService.getTitle(setting.percent),
                },
            },
            type: 'doughnut',
        };

        this._chart = new Chart(percentChartCanvasCtx, chartConfiguration);
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
        (this.chart as any).options.title.text = PercentChartService.getTitle(percent);
        this.chart.update();
    }
}
