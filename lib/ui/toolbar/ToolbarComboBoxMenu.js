import React from 'react';

class ToolbarComboBoxMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	items:[]
        };
    }

    onChanged(e){

    }

    render() {
    	var items = this.state.items.map(function(e,i){
    		return <ToolbarComboBoxItem key={e.key} label={e.label} onClicked={this.on/>
    	});
        return (
        	<div className="shui-combobox-menu">
        		{items}
        	</div>
        	);
    }
}

export default ToolbarComboBoxMenu;
