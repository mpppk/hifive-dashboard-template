interface IDammyData {
    markerPosition: L.LatLngTuple;
    percent: number;
    barChartData: number[];
}

export default class DummyDataService {
    private static getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    private _data: IDammyData;

    constructor() {
        this._data = {
            barChartData: [12, 19, 3, 5, 2, 3],
            markerPosition: [51.5, -0.09],
            percent: 50,
        };
    }

    get data() {
        return this._data;
    }

    public update(): IDammyData {
        this._data.percent += DummyDataService.getRandomArbitrary(-5, 5);
        this._data.barChartData = this._data.barChartData.map((d) => {
            return d + DummyDataService.getRandomArbitrary(-2, 2);
        });
        this._data.markerPosition[0] += DummyDataService.getRandomArbitrary(-0.001, 0.001);
        this._data.markerPosition[1] += DummyDataService.getRandomArbitrary(-0.001, 0.001);
        return this.data;
    }
}
