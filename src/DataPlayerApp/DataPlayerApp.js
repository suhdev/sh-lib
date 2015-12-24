import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Toolbar from '../../lib/ui/toolbar/Toolbar';
import ToolbarController from '../../lib/ui/toolbar/ToolbarController';
import ToolbarButton from '../../lib/ui/toolbar/ToolbarButton';
import Slider from '../../lib/ui/slider/Slider';
import MapView from '../../lib/ui/mapview/MapView';
import MapBoxProvider from '../../lib/maps/MapBoxProvider';
import MapViewController from '../../lib/ui/mapview/MapViewController';

(function(){
    class DataPlayerApp{
        constructor(){
            this.toolbarCtrl = new ToolbarController();
            this.mapViewCtrl = new MapViewController(new MapBoxProvider({
                mapId:'mapbox.streets',
                key:'pk.eyJ1Ijoic3VoYWlsYWJvb2QiLCJhIjoiMmY1ZWM5NDM2NmJlMmYzOTExNTUwZmE3MzBkYWEwZmYifQ.l0z4zBPbZ09VwMEZCu7cbA'
            }));
            this.toolbarCtrl.on('ToolbarButtonClicked',this.onButtonClick.bind(this));
            jQuery(document).ready(this.render.bind(this));
        }

        onButtonClick(e){
            console.log(e);
        }

        render(){
            console.log(document.getElementById('SiteContainer'));
            this.view = ReactDOM.render(
                <div className="app-container">
                    <Toolbar controller={this.toolbarCtrl}>
                        <ToolbarButton icon="shui-icon-play" label="Play" componentId="playButton" controller={this.toolbarCtrl}/>
                        <ToolbarButton icon="shui-icon-stop" label="Stop" componentId="stopButton" controller={this.toolbarCtrl}/>
                    </Toolbar>
                    <div className="mapview">
                        <MapView controller={this.mapViewCtrl} />
                    </div>
                </div>,document.getElementById('SiteContainer')
            );
        }
    }


    (new DataPlayerApp());
})();
