import { Controllization } from '../h5/IController';
import {
  BarChartService,
  IBarChartServiceSetting
} from '../service/BarChartService';

export interface IBarChartControllerSetting {
  barChartServiceSetting: IBarChartServiceSetting;
}

const props = {
  barChartService: null as BarChartService | null,
  initialize(setting: IBarChartControllerSetting) {
    this.barChartService = new BarChartService(setting.barChartServiceSetting);
  },

  update(data: number[]) {
    if (this.barChartService === null) {
      return;
    }
    this.barChartService.update(data);
  }
};

export const barChartController: Controllization<typeof props> = {
  ...props,
  __name: 'barChartController',
};
