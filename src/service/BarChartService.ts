import { Chart, ChartDataSets } from 'chart.js';
export interface IBarChartServiceSetting {
  barChartElementId: string;
  backgroundColors: string[];
  borderColors: string[];
  data: number[];
  datasetLabel: string;
  labels: string[];
}
export class BarChartService {
  private readonly _chart: Chart;
  constructor(setting: IBarChartServiceSetting) {
    const barChartCanvas = document.getElementById(
      setting.barChartElementId,
    ) as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');
    if (ctx === null) {
      throw new Error('ctx is null'); // FIXME
    }
    const dataset: ChartDataSets = {
      backgroundColor: setting.backgroundColors,
      borderColor: setting.borderColors,
      borderWidth: 1,
      data: setting.data,
      label: setting.datasetLabel,
    };
    this._chart = new Chart(ctx, {
      data: {
        datasets: [dataset],
        labels: setting.labels,
      },
      options: {},
      type: 'bar',
    });
  }
  // get chart(): Chart {
  //     return this._chart;
  // }
  // set chart(c: Chart) {
  //     this._chart = c;
  // }
  public update(newData: number[]) {
    if (
      this._chart === null ||
      typeof this._chart === 'undefined' ||
      typeof this._chart.data === 'undefined' ||
      typeof this._chart.data.datasets === 'undefined' ||
      this._chart.data.datasets.length < 1 ||
      typeof this._chart.data.datasets[0].data === 'undefined'
    ) {
      return;
    }
    this._chart.data.datasets[0].data = newData;
    this._chart.update();
  }
}
