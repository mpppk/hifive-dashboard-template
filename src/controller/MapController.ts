import * as L from 'leaflet';

export interface IMapSetting {
    mapElementId: string;
    position: L.LatLngExpression;
    iconType: MapMarkerIconType;
    zoom: number;
    tileUrl: string;
    tileLayerOptions: L.TileLayerOptions;
    markerPosition: L.LatLngExpression;
}

export enum MapMarkerIconType {
    White = 'white',
    Black = 'black',
}

const getIcon = (iconType: MapMarkerIconType) => {
    const blackIcon: L.Icon = L.icon({
        iconSize:     [50, 50], // size of the icon
        iconUrl: 'assets/mapicons/ic_person_pin_black_48dp_2x.png',
    });

    const whiteIcon: L.Icon = L.icon({
        iconSize:     [50, 50], // size of the icon
        iconUrl: 'assets/mapicons/ic_person_pin_white_48dp_2x.png',
    });

    switch (iconType) {
        case MapMarkerIconType.White:
            return whiteIcon;
        case MapMarkerIconType.Black:
            return blackIcon;
        default:
            return blackIcon;
    }
};

export const mapController = {
    __name: 'mapController',

    initializeMap(mapSetting: IMapSetting) {
        this.mymap = L.map(mapSetting.mapElementId).setView(mapSetting.position, mapSetting.zoom);
        L.tileLayer(mapSetting.tileUrl, mapSetting.tileLayerOptions).addTo(this.mymap);
        const opt: L.MarkerOptions = {icon: getIcon(mapSetting.iconType)};
        this.marker = L.marker(mapSetting.markerPosition, opt).addTo(this.mymap);
    },

    updatePosition(position: L.LatLngExpression) {
        this.marker.setLatLng(position);
    },

    updateMarkerIcon(iconType: MapMarkerIconType) {
        this.marker.setIcon(getIcon(iconType));
    },
};
