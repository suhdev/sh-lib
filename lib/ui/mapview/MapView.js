import * as React from 'react';
import BasicComponent from '../common/BasicComponent';
/**
 * @name MapView
 * @type class
 * @description Represents a canvas to draw
 *
 */
class MapView extends BasicComponent {
    constructor(props) {
        super(props);

    }

    componentDidMound(){
        super.componentDidMound();
    }

    getCanvas(){
        return this.refs.mapCanvas;
    }

    render() {
        return (
            <div className="shui-mapview">
                <div className="shui-map-canvas" ref="mapCanvas"></div>
            </div>
        );
    }
}

export default MapView;
