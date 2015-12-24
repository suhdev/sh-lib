import React from 'react';

class ToolbarSeparator extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ToolbarSeparator';
    }
    render() {
        return <div className="shui-toolbar-separator"></div>;
    }
}

export default ToolbarSeparator;
