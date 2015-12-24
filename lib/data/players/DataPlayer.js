'use strict';
import EventEmitter from 'events';

class DataPlayer extends EventEmitter{
    constructor(data){
        super();
        this.data = data;
        this.duration = 200;
    }

    play(){

    }

    stop(){

    }

    pause(){

    }

    speedUp(){

    }

    speedDown(){

    }

    tick(){

    }

}

export default DataPlayer;
