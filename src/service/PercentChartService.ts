import { Chart, ChartConfiguration, ChartDataSets } from 'chart.js';

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

  private readonly _chart: Chart;

  constructor(setting: IPercentChartServiceSetting) {
    const percentChartCanvas = document.getElementById(
      setting.percentChartElementId,
    ) as HTMLCanvasElement;
    const percentChartCanvasCtx: CanvasRenderingContext2D | null = percentChartCanvas.getContext(
      '2d',
    );

    if (percentChartCanvasCtx === null) {
      throw new Error('ctx is null'); // FIXME
    }

    const chartDataSet: ChartDataSets = {
      backgroundColor: [setting.secondaryColor, setting.primaryColor],
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

  public update(percent: number) {
    if (
      this._chart === null ||
      typeof this._chart === 'undefined' ||
      typeof this._chart.data === 'undefined' ||
      typeof this._chart.data.datasets === 'undefined' ||
      this._chart.data.datasets.length < 1 ||
      typeof this._chart.data.datasets[0].data === 'undefined' ||
      this._chart.data.datasets[0].data!.length < 2
    ) {
      return;
    }

    // FIXME
    this._chart.data.datasets[0].data![0] = 100 - percent;
    this._chart.data.datasets[0].data![1] = percent;
    // FIXME
    (this._chart as any).options.title.text = PercentChartService.getTitle(
      percent,
    );
    this._chart.update();
  }
}
