'use strict';
import EventEmitter from 'events';
console.log(EventEmitter);
class ViewController extends EventEmitter{
	constructor(component,comps){
		super();
		this.view = null;
		this.ViewComponent = component;
		this.components = comps || [];
	}

	_add(fn,e){
		this.components[fn].apply(this.components,Array.prototype.slice.call(arguments,1));
		this._update();
	}

	addFirst(component){
		this._add('unshift',component);
	}

	addComponent(component){
		this._add('push',component);
	}

	insertComponentAt(index,component){
		this._add('splice',index,0,component);
	}

	removeComponentAt(index){
		this._add('splice',index,1);
	}

	_update(){
        this.view.components &&
        this.view.components !== this.components &&
        this.view &&
        this.view.setState({
			components:this.components
		});
	}

	getComponents(){
		return this.components;
	}

	onViewRendered(view){
		this.view = view;
		this._update();
	}
}

export default ViewController;
