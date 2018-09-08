import { IController, IPartialController } from "../h5/IController";
import DummyDataService from "../service/DummyDataService";
import {
  barChartController,
  IBarChartController,
  IBarChartControllerSetting
} from "./BarChartController";
import {
  ILeftCardController,
  ILeftCardSetting,
  leftCardController
} from "./LeftCardController";
import {
  IMapController,
  IMapSetting,
  mapController,
  MapMarkerIconType
} from "./MapController";

export interface IRootControllerParams {
  barChartSetting: IBarChartControllerSetting;
  leftCardSetting: ILeftCardSetting;
  mapSetting: IMapSetting;
}

interface IRootController extends IController {
  polling: () => void;
  _barChartController: IBarChartController;
  _dummyDataService: DummyDataService;
  _leftCardController: ILeftCardController;
  _mapController: IMapController;
}

export const rootController: IRootController = {
  ...({} as IPartialController),
  __name: "rootController",
  _barChartController: barChartController,
  _dummyDataService: new DummyDataService(),
  _leftCardController: leftCardController,
  _mapController: mapController,

  __ready(context: any) {
    this._mapController.initializeMap(context.args.mapSetting);
    this._mapController.updateMarkerIcon(MapMarkerIconType.Black);
    this._leftCardController.initialize(context.args.leftCardSetting);
    this._barChartController.initialize(context.args.barChartSetting);
    this._leftCardController.updateTopImage("assets/dog.png");
    this._leftCardController.updateBottomPointImage("assets/dog.png");
    this.polling();
  },

  polling() {
    const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n));
    const wait = async () => {
      while (true) {
        const dummyData = this._dummyDataService.update();
        this._leftCardController.updatePercentChart(dummyData.percent);
        this._mapController.updatePosition(dummyData.markerPosition);
        this._barChartController.update(dummyData.barChartData);
        await sleep(2000);
      }
    };
    wait();
  }
};
