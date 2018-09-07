import * as _ from 'lodash';
import DummyDataService from '../src/service/DummyDataService';

it('should update data', () => {
  const dummyDataService = new DummyDataService();
  const data = _.cloneDeep(dummyDataService.data);
  const newData = dummyDataService.update();
  expect(data.percent).not.toBe(newData.percent);
  // !== newData.percent);
  expect(data.markerPosition.length).toBe(2);
  expect(data.markerPosition[0]).not.toBe(newData.markerPosition[0]);
  expect(data.markerPosition[1]).not.toBe(newData.markerPosition[1]);
  expect(
    data.barChartData.filter((d) => newData.barChartData.indexOf(d) < 0)
      .length).toBe(6);
});
