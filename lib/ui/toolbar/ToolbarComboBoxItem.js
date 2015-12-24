import React from 'react';

class ToolbarComboBoxItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onClicked(e){

    }

    render() {
        return (
        	<div className="shui-combobox-item" onClick={this.onClicked.bind(this)}>
        		<span className="shui-label">{this.props.label}</span>
        	</div>
        	);
    }
}

export default ToolbarComboBoxItem;
