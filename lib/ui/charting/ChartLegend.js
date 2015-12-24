import React from 'react';

class ChartLegend extends React.Component {
    constructor(props){
        super(props);
        this.controller = props.controller;
        this.state = {
            visible:props.visible
        };
    }

    hide(){
        this.setState({
            visible:false
        });
    }

    show(){
        this.setState({
            visible:true
        });
    }

    render(){
        var self = this;
        var items = this.props.items.map(function(e,i){
            return (
                <LegendItem key={i} onItemClick={self.controller.onLegendItemClick} item={e} />
            );
        });
        return (
        <div className="shui-chart-legend">
            {items}
            {this.props.children}
        </div>
        );
    }

}

export default ChartLegend;
