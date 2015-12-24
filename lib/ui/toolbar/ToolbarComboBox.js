import React from 'react';

class ToolbarComboBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	selected:{
        		label:''
        	}
        };
    }

    selectItem(item,component){

    }

    toggleMenu(){
    	this.refs.menu.toggleMenu
    }

    onChanged(e){

    }

    render() {
        return (
        	<div className="toolbar-combobox">
        		<div className="toolbar-combobox-label" onClick={this.toggleMenu.bind(this)}>{this.state.selected.label}</div>
        		<ToolbarComboBoxMenu ref="menu" items={this.props.items} onChanged={this.onChanged.bind(this)}/>
        	</div>
        	);
    }
}

export default ToolbarComboBox;
