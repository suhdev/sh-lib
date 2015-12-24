import * as React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import SliderLegend from './SliderLegend';
import BasicComponent from '../common/BasicComponent';

class Slider extends BasicComponent {
    constructor(props) {
        super(props);
        this.state = {
            min:props.min || 0,
            position:props.position || 0,
            max:props.max || 100

        };
    }

    onSlideStart(e){
        this.slideStarted = true;
        this.controller.emit('SlideStart',{
            min:this.state.min,
            position:this.state.position,
            max:this.state.max
        });
        e.stopPropagation()
        e.preventDefault();
    }

    onSlideMove(e){
        if (this.slideStarted){
            this.onSlideGoTo(e);
        }
    }

    onSlideGoTo(e){
        var viewport = jQuery(this.refs.viewport),
            left = (e.pageX - viewport.offset().left)/viewport.width()*100,
            pos = left>this.state.max?this.state.max:(left<this.state.min)?this.state.min:left;
        this.controller && this.controller.emit('Slide',{
            data:{
                position:pos
            },
            target:this,
            componentId:this.componentId
        });
        this.setState({position:pos});
    }

    onSlideStop(e){
        this.slideStarted = false;
        this.controller.emit('SlideStop',{
            position:this.state.position,
            min:this.state.min,
            max:this.state.max
        });
        e.stopPropagation()
        e.preventDefault();
    }

    render() {
        var styleProgress = {
            width:((this.state.position/this.state.max)*100)+'%'
        },styleKnob={
            left:((this.state.position/this.state.max)*100)+'%'
        };
        return (
        	<div className="shui-slider" onMouseLeave={this.onSlideStop.bind(this)} onMouseMove={this.onSlideMove.bind(this)}>
                <div className="shui-viewport" ref="viewport" onMouseUp={this.onSlideGoTo.bind(this)}>
                    <div className="shui-progress" style={styleProgress}></div>
                    <div className="shui-slider-knob" style={styleKnob} onMouseDown={this.onSlideStart.bind(this)} onMouseUp={this.onSlideStop.bind(this)}></div>
                </div>
        		<SliderLegend ticks={this.props.ticks} min={this.props.min} max={this.props.max} />
        	</div>
        );
    }
}

export default Slider;
