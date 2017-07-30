import * as _ from 'lodash';
import 'mocha';
import * as assert from 'power-assert';
import DummyDataService from '../src/service/DummyDataService';

describe('DummyDataService', () => {
    describe('#update()', () => {
        it('should update data', () => {
            const dummyDataService = new DummyDataService();
            const data = _.cloneDeep(dummyDataService.data);
            const newData = dummyDataService.update();
            assert(data.percent !== newData.percent);
            assert(data.markerPosition.length === 2);
            assert(data.markerPosition[0] !== newData.markerPosition[0]);
            assert(data.markerPosition[1] !== newData.markerPosition[1]);
            assert(data.barChartData.filter((d) => newData.barChartData.indexOf(d) < 0).length === 6);
        });
    });
});
