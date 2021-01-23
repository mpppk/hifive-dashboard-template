import {Controllization} from '../h5/IController';
import {
  IPercentChartServiceSetting,
  PercentChartService
} from '../service/PercentChartService';

export interface IPercentChartControllerSetting {
  percentChartServiceSetting: IPercentChartServiceSetting;
}

const props = {
  percentChartService: null as PercentChartService | null,

  initialize(setting: IPercentChartControllerSetting) {
    this.percentChartService = new PercentChartService(
      setting.percentChartServiceSetting
    );
  },

  update(percent: number) {
    if (!this.percentChartService) {
      throw new Error('PercentChartController does not initialized');
    }
    this.percentChartService.update(percent);
  }
};

export const percentChartController: Controllization<typeof props> = {
  ...props,
  __name: 'percentChartController',
};
