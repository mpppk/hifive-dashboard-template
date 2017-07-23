import chartController from './ChartController';
import mapController from './MapController';

const rootController = {
    __name: 'rootController',
    _chartController: chartController,
    _mapController: mapController,
};

export default rootController;
