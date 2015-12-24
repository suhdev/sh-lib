import React from 'react';
class Chart extends React.Component{
    constructor(props){
        super(props);
        this.controller = props.controller;
        this.generator = props.controller.getGenerator();
        this.state = {
            visible:props.visible
        };
    }

    componentDidUpdate(){
        if (this.generator){
            this.generator.update(this.props.data,this.refs.canvas); 
        }
    }

    componentDidMount(){
        if (this.generator){
            this.generator.create(this.props.data,this.refs.canvas);
        }
    }

    render(){
        return (
            <div className="shui-chart-canvas">
                <div className="shui-canvas" ref="canvas"></div>
                <ChartLegend items={this.props.items} controller={this.controller} />
            </div>

        )
    }
}
