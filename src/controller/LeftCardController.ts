import {Controllization} from '../h5/IController';
import {
  IPercentChartControllerSetting,
  percentChartController
} from './PercentChartController';

export interface ILeftCardSetting {
  percentChartControllerSetting: IPercentChartControllerSetting;
  topImageElementId: string;
  bottomImageElementId: string;
}

type ILeftCardControllerProps = {
  updateTopImage(imagePath: string): void;
  updateBottomPointImage(imagePath: string): void;
} & typeof props;

const props = {
  _percentChartController: percentChartController,
  setting: null as ILeftCardSetting | null,
  initialize(setting: ILeftCardSetting) {
    this.setting = setting;
    this._percentChartController.initialize(
      setting.percentChartControllerSetting
    );
  },

  updatePercentChart(percent: number) {
    this._percentChartController.update(percent);
  },
};

export const leftCardController: Controllization<ILeftCardControllerProps> = {
  ...props,
  __name: 'leftCardController',
  updateTopImage(imagePath: string) {
    if (this.setting === null) {
      return;
    }

    const topImageElementSelector = '#' + this.setting.topImageElementId;
    this.$find(topImageElementSelector).attr('src', imagePath);
  },

  updateBottomPointImage(imagePath: string) {
    if (this.setting === null) {
      return;
    }

    const bottomImageElementSelector = '#' + this.setting.bottomImageElementId;
    this.$find(bottomImageElementSelector).attr('src', imagePath);
  }
};
