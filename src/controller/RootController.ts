import countUpController from './CountUpController';
import resetController from './ResetController';
import mapController from './MapController';

const rootController = {
    __name: 'rootController',
    _mapController: mapController,
};

export default rootController;
