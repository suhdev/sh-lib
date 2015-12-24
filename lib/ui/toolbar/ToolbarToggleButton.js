import React from 'react';

class ToolbarToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	pressed:false
        };
    }

    onClicked(e){
    	var controller = this.props.controller,
            buttonData = this.props.buttonData,
            key = buttonData.key,
            pressed = !this.state.pressed,
            method = 'on'+key.slice(0,1).toUpperCase()+key.slice(1),
            func = controller[method]?controller[method]:(controller[method+'Clicked'])?controller[method+'Clicked']:controller.onItemClicked;
            func = func.bind(controller,buttonData,this);
        if (func){
            func(e,pressed);
        }
        this.setState({
        	pressed:pressed
        });
    }

    render() {
    	var buttonData = this.props.buttonData,
    		pressed = this.state.pressed;
        return (
        	<div className="shui-toolbar-button" data-pressed={pressed} onClick={this.onClicked.bind(this)}>
        		<i className={"shui-icon "+buttonData.icon}></i>
        	</div>
        	);
    }
}

export default ToolbarToggleButton;
