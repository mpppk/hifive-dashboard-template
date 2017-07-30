import {Chart, ChartDataSets} from 'chart.js';

export interface IBarChartServiceSetting {
    barChartElementId: string;
    backgroundColors: string[];
    borderColors: string[];
    data: number[];
    datasetLabel: string;
    labels: string[];
}

export class BarChartService {
    private _chart: Chart;

    constructor(setting: IBarChartServiceSetting) {
        const barChartCanvas = document.getElementById(setting.barChartElementId) as HTMLCanvasElement;
        const ctx = barChartCanvas.getContext('2d');

        if (ctx === null) {
            return;
        }

        const dataset: ChartDataSets = {
            backgroundColor: setting.backgroundColors,
            borderColor: setting.borderColors,
            borderWidth: 1,
            data: setting.data,
            label: setting.datasetLabel,
        };

        this.chart = new Chart(ctx, {
            data:  {
                datasets: [dataset],
                labels: setting.labels,
            },
            options: {},
            type: 'bar',
        });
    }

    get chart(): Chart {
        return this._chart;
    }

    set chart(c: Chart) {
        this._chart = c;
    }

    public update(newData: number[]) {
        if (this.chart === null ||
            typeof this.chart === 'undefined' ||
            typeof this.chart.data === 'undefined' ||
            typeof this.chart.data.datasets === 'undefined' ||
            this.chart.data.datasets.length < 1 ||
            typeof this.chart.data.datasets[0].data === 'undefined'
        ) { return; }
        this.chart.data.datasets[0].data = newData;
        this.chart.update();
    }
}
