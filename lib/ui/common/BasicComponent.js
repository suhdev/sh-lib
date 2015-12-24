import React from 'react';
class BasicComponent extends React.Component {

    constructor(props) {
        super(props);
        this.controller = props.controller;
        this.componentId = props.componentId;
    }

    componentDidMount(){
    	this.controller && this.controller.onViewRendered(this);
    }
}

export default BasicComponent;
