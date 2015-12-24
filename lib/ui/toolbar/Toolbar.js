import React from 'react';
import BasicComponent from '../common/BasicComponent';
import ToolbarButton from './ToolbarButton';
import ToolbarToggleButton from './ToolbarToggleButton';
import ToolbarSeparator from './ToolbarSeparator';

var Components = {
    ToolbarSeparator:ToolbarSeparator,
    ToolbarButton:ToolbarButton,
    ToolbarToggleButton:ToolbarToggleButton
};

class Toolbar extends BasicComponent {
    constructor(props) {
        super(props);
        this.state = {
            components:props.components || []
        };
    }

    setComponents(components){
        this.setState({
            items:components
        });
    }

    componentDidMount(e){
        super.componentDidMount(e);
    }

    render() {
        var controller = this.controller,
        items = this.state.components.map(function(e,i){
            return React.createElement(Components[e.type],e);
        });

        return (
        	<div className="shui-toolbar">
        		{this.props.children}
                {items}
        	</div>
        );
    }
}

export default Toolbar;
