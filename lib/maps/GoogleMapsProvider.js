import * as Q from 'q';

class GoogleMapsProvider {
	constructor(options){
		this.key = options.key;
		this.mapOptions = options.mapOptions;
		this.markers = [];
		this.def = Q.defer();
		this.loaded = false;
	}

	load(){

	}

	addMarker(markerData){

	}

	removeMarker(markerData){

	}

	whenLoaded(){
		return this.def.promise;
	}

	createMap(){
		this.map = L.mapbox.map('map', 'mapbox.streets')
    			.setView([40, -74.50], 3);
	}

	onMounted(view){
		this.view = view;
		this.createMap();
	}
}

export default GoogleMapsProvider;
