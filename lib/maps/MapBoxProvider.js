import jQuery from 'jquery';
import d3 from 'd3';
class MapBoxProvider {
	constructor(options){
		this.key = options && options.key;
		this.mapId = options && options.mapId;
		L.mapbox.accessToken = options && options.key;
		this.mapOptions = (options && options.mapOptions) || {
			zoom:8,
			center:[56.0,54.0]
		};
		this.markers = [];
		this.loaded = false;
	}

	clearMarkers(){
		this.markers = [];
		this.featureGroup.clearLayers();
	}

	create(el){
		this.map = L.mapbox.map(el, this.mapId || 'mapbox.streets')
    		.setView(this.mapOptions.center, this.mapOptions.zoom);
		window.map = this.map;
    	this.featureGroup = L.featureGroup();
    	this.featureGroup.addTo(this.map);
	}

	onMarkerClicked(marker,markerData,evt){
		if (markerData.onClick){
			markerData.onClick(markerData,marker);
		}
	}

	addMarker(markerData){
		var marker = L.marker(markerData.position,
			markerData.options);
		marker.on('click',this.onMarkerClicked.bind(this,marker,markerData));
		marker.userData = markerData;
		this.featureGroup.addLayer(marker);
		this.markers.push(marker);
		return marker;
	}

	removeMarker(markerData){
		var m = null,i,l,markers = this.markers;
		for(i=0,l=markers.length;i<l;i++){
			if (markers[i].userData === markerData){
				m = markers[i];
			}
		}
		if (m){
			this.featureGroup.removeLayer(m);
		}
	}

	getPointsInBounds(data,toLatLngFn){
        var bounds = this.map.getBounds();
        return _(data)
            .map(function(e){
                return _(e).filter(function(e){
                    return bounds.contains(toLatLngFn(e));
                }).value();
            }).value();

    }

}

export default MapBoxProvider;
