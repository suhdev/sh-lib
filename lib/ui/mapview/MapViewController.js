import ViewController from '../common/ViewController';
import MapView from './MapView';
class MapViewController extends ViewController {
    constructor(provider){
        super(MapView);
        this.provider = provider;
    }

    setProvider(provider){
        this.provider = provider;
    }

    getProvider(){
        return this.provider;
    }


    onViewRendered(view){
        super.onViewRendered(view);
        this.provider && this.provider.create(view.getCanvas());
    }
}

export default MapViewController;
