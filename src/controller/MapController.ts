import * as L from 'leaflet';
import { IController, IPartialController } from '../h5/IController';

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
  White,
  Black
}

export interface IMapController extends IController {
  mymap: L.Map | null;
  marker: L.Marker | null;
  getIcon(iconType: MapMarkerIconType): L.Icon;
  initializeMap(mapSetting: IMapSetting): void;
  updatePosition(position: L.LatLngExpression): void;
  updateMarkerIcon(iconType: MapMarkerIconType): void;
}

export const mapController: IMapController = {
  ...({} as IPartialController),
  __name: 'mapController',
  marker: null,
  mymap: null,

  getIcon(iconType: MapMarkerIconType): L.Icon {
    const blackIcon: L.Icon = L.icon({
      iconSize: [50, 50], // size of the icon
      iconUrl: 'assets/mapicons/ic_person_pin_black_48dp_2x.png'
    });

    const whiteIcon: L.Icon = L.icon({
      iconSize: [50, 50], // size of the icon
      iconUrl: 'assets/mapicons/ic_person_pin_white_48dp_2x.png'
    });

    switch (iconType) {
      case MapMarkerIconType.White:
        return whiteIcon;
      case MapMarkerIconType.Black:
        return blackIcon;
      default:
        return blackIcon;
    }
  },

  initializeMap(mapSetting: IMapSetting) {
    this.mymap = L.map(mapSetting.mapElementId).setView(
      mapSetting.position,
      mapSetting.zoom
    );
    L.tileLayer(mapSetting.tileUrl, mapSetting.tileLayerOptions).addTo(
      this.mymap
    );
    const opt: L.MarkerOptions = { icon: this.getIcon(mapSetting.iconType) };
    this.marker = L.marker(mapSetting.markerPosition, opt).addTo(this.mymap);
  },

  updatePosition(position: L.LatLngExpression) {
    if (this.marker === null) {
      return;
    }

    this.marker.setLatLng(position);
  },

  updateMarkerIcon(iconType: MapMarkerIconType) {
    if (this.marker === null) {
      return;
    }

    this.marker.setIcon(this.getIcon(iconType));
  }
};
