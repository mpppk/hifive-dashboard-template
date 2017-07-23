import * as L from 'leaflet';

const mapController = {
    __name: 'mapController',

    __ready(context) {
        const mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(mymap);
    },
};

export default mapController;
