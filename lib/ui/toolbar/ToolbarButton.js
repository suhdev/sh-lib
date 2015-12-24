import React from 'react';

class ToolbarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon:props.icon,
            label:props.label || ''
        };
        this.controller = this.props.controller;
        this.componentId = this.props.componentId || (this.props.componentData && this.props.componentData.key);
        var controller = this.props.controller,
            componentData = this.props.componentData,
            key = this.componentId || (componentData && componentData.key),
            method = key && 'on'+key.slice(0,1).toUpperCase()+key.slice(1),
            func = method && controller && (controller[method] || controller[method+'Clicked'] || controller.onItemClicked || this.props.onClicked)
        this.listenerFn = func && func.bind(controller,componentData,this);
    }

    onClicked(e){
        this.listenerFn && this.listenerFn(this.componentId,{
            key:this.componentId
        },this);
        console.log(this.controller);
        this.controller && this.controller.emit('ToolbarButtonClicked',{
            key:this.componentId,
            target:this,
            data:{
                key:this.componentId
            }
        });
    }

    setIcon(icon){
        this.setState({
            icon:icon
        });
    }

    setLabel(label){
        this.setState({
            label:label
        });
    }

    shouldComponentUpdate(nextProps,nextState){
        return this.state.icon !== nextState.icon ||
               this.state.label !== nextState.label;
    }

    componentDidMount(){
        this.controller && this.controller.onComponentMounted && this.controller.onComponentMounted(this);
    }

    render() {
        var componentData = this.props.componentData || {},
            label = componentData.label || this.props.label,
            icon = componentData.icon || this.props.icon;
        return (
        	<div className="shui-toolbar-button" onClick={this.onClicked.bind(this)} title={label}>
        		<i className={"shui-icon "+icon}></i>
        	</div>
        );
    }
}

export default ToolbarButton;
