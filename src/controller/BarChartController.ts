import { IController, IPartialController } from "../h5/IController";
import {
  BarChartService,
  IBarChartServiceSetting
} from "../service/BarChartService";

export interface IBarChartControllerSetting {
  barChartServiceSetting: IBarChartServiceSetting;
}

export interface IBarChartController extends IController {
  barChartService: BarChartService | null;
  initialize(setting: IBarChartControllerSetting): void;
  update(data: number[]): void;
}

export const barChartController: IBarChartController = {
  ...({} as IPartialController),
  __name: "barChartController",
  barChartService: null,
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
