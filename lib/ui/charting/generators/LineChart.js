import jQuery from 'jquery';
class LineChartGenerator {
    constructor(margins){
        this.margins = margins || {
            top:30,
            left:60,
            right:30,
            bottom:60
        };
    }

    create(el){
        var margins = this.margins;
        this.canvas = d3.select(el)
            .append('svg')
            .attr({
                height:jQuery(el).height(),
                width:jQuery(el).width()
            });

        this.chartCanvas = this.canvas
            .append('g')
            .attr('transform',['translate(',[margins.left,margins.top].join(','),')'].join(''));

        this.xScale = d3.scale.linear();
        this.yScale = d3.scale.linear();
    }

    update(){

    }

    setXScale(scale){
        this.xScale = scale;
    }

    setYScale(scale){
        this.yScale = scale;
    }


}
