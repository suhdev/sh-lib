import * as React from 'react';

class SliderKnob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	position:props.position
        };
    }
    render() {
    	var style ={
    		left:(this.state.position*100)+'%'
    	};
        return ;
    }
}

export default SliderKnob;
