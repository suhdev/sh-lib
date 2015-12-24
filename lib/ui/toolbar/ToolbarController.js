import ViewController from '../common/ViewController';
import Toolbar from './Toolbar';
class ToolbarController extends ViewController{
	constructor(components){
		super(Toolbar,components);
	}

	onToolbarItemClicked(key,item,btn){
		var method = 'on'+key.slice(0,1).toUpperCase()+key.slice(1);
		if (this[method]){
			this[method](item);
		}
	}
}

export default ToolbarController;
