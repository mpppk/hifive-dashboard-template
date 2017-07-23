import * as L from 'leaflet';

export interface IMapSetting {
    mapElementId: string;
    latLngExpression: L.LatLngExpression;
    zoom: number;
    tileUrl: string;
    tileLayerOptions: L.TileLayerOptions;
}

export const mapController = {
    __name: 'mapController',

    initializeMap(mapSetting: IMapSetting) {
        this.mymap = L.map(mapSetting.mapElementId).setView(mapSetting.latLngExpression, mapSetting.zoom);
        L.tileLayer(mapSetting.tileUrl, mapSetting.tileLayerOptions).addTo(this.mymap);
    },
};
