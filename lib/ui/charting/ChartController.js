import * as EventEmitter from 'events';

class ChartController extends EventEmitter{
    constructor(gen){
        super();
        this.generator = gen;
    }

    onLegendItemClick(item,itemView){

    }

    setGenerator(gen){
        this.generator = gen;
        //TODO clean
    }

    getGenerator(){
        return this.generator;
    }




}
