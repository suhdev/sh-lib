'use strict';

import DataPlayer from './DataPlayer';
import d3 from 'd3';
import _ from 'lodash';

class MapDataPlayer extends DataPlayer {
    constructor(mapProvider,data){
        var dat = [
            [[38.597241,-90.168711],
            [27.77714,-97.94174],
            [27.77714,-97.94174],
            [27.92603,-82.39439],
            [38.1804,-90.3366],
            [32.17082,-110.90689],
            [38.5391,-77.2786],
            [42.03873,-92.907887],
            [29.98553,-90.44728],
            [21.33324,-157.91331],
            [41.505568,-87.609401],
            [41.738,-108.786],
            [41.180429,-95.839035],
            [42.10981,-80.10155],
            [41.37956,-82.16841]],
            [[33.751629,-118.208842],
            [35.90573,-86.87874],
            [34.99461,-78.89517],
            [28.9594,-82.7003],
            [33.139372,-91.96557],
            [29.954834,-93.879684],
            [41.99908,-87.96307],
            [34.597111,-98.527528],
            [39.11807,-75.50592],
            [42.86913,-91.39378],
            [33.742778,-93.656667],
            [40.73835,-88.99657],
            [41.175861,-83.418511],
            [30.951733,-88.018265],
            [34.30991,-78.71524],
            [43.6823,-72.2353],
            [43.07568,-92.75204],
            [29.63993,-95.05196],
            [42.78114,-84.65017],
            [34.05779,-117.54985]],
            [[29.954834,-93.879684],
            [33.80542,-118.22565],
            [34.05779,-117.54985],
            [40.856367,-89.563043],
            [27.861932,-82.393684],
            [41.6974,-86.4674],
            [42.154981,-72.526419],
            [33.643,-87.1998],
            [36.15183,-96.02185],
            [45.57329,-122.71494],
            [39.4805,-76.64579],
            [35.28035,-81.305933],
            [42.49006,-79.308],
            [42.278378,-83.412204],
            [46.89742,-96.8596],
            [33.184744,-92.706867],
            [33.184744,-92.706867],
            [33.184744,-92.706867],
            [38.958312,-81.925867]],
            [[46.6915,-92.072],
            [41.47483,-81.76694],
            [45.5635,-122.7427],
            [36.08996,-95.846849],
            [45.5635,-122.7427],
            [33.290556,-81.648889],
            [38.91918,-77.48731],
            [32.312167,-90.137278],
            [41.75869,-87.76741],
            [42.815833,-73.666667],
            [42.26257,-72.4032],
            [29.763056,-95.0225],
            [44.33096,-94.47573],
            [29.52073,-97.44677],
            [41.496333,-87.468444]],
            [[31.354802,-96.165199],
            [42.08629,-79.35927],
            [41.211242,-80.81682],
            [41.99298,-71.33211],
            [42.84874,-87.93297],
            [42.84874,-87.93297],
            [42.84874,-87.93297],
            [27.973741,-82.346668],
            [37.49266,-120.89203],
            [37.49266,-120.89203],
            [30.036915,-97.677862],
            [30.036915,-97.677862],
            [42.976,-78.932]],
            [[42.976,-78.932],
            [42.70952,-90.98431],
            [40.9997,-84.03979],
            [29.958889,-90.270472],
            [29.958889,-90.270472],
            [38.596892,-90.212156],
            [38.596892,-90.212156],
            [30.179916,-93.359229],
            [44.950425,-74.893685],
            [38.87007,-90.11595],
            [33.71524,-117.81146],
            [41.46758,-84.52336],
            [27.8269,-97.52533],
            [35.67569,-120.638571],
            [38.71749,-90.43902],
            [40.76606,-81.51439]],
            [[34.20616,-119.1272],
            [33.97107,-118.11327],
            [39.207304,-77.464762],
            [33.30103,-111.95939],
            [30.71606,-92.265061],
            [44.5428,-117.4218],
            [36.05328,-79.59847],
            [18.176389,-65.873889],
            [47.370445,-101.838042],
            [42.41772,-71.07499],
            [40.99428,-80.35105],
            [32.92063,-80.06046],
            [35.42575,-94.33127],
            [28.626025,-81.45082],
            [44.42788,-88.068]],
            [[43.100101,-79.002075],
            [31.550698,-84.063799],
            [37.21287,-93.2272],
            [41.84128,-86.235635],
            [41.84128,-86.235635],
            [44.66478,-123.06147],
            [35.72409,-88.81766],
            [35.72409,-88.81766],
            [30.34475,-95.47011],
            [39.97032,-83.10457],
            [30.12103,-90.979038],
            [33.751629,-118.208842],
            [36.173118,-95.945235],
            [40.450051,-85.355891],
            [40.2309,-75.228271],
            [41.47609,-85.60329],
            [35.085619,-90.133019],
            [35.085619,-90.133019],
            [33.4375,-112.18055],
            [38.109942,-90.257947],
            [29.719389,-95.179083],
            [29.719389,-95.179083],
            [40.214447,-76.120101]],
            [[41.07871,-84.95702],
            [35.942306,-83.838118],
            [40.78198,-73.73239],
            [35.27859,-80.92968],
            [38.601902,-90.132818],
            [41.07871,-84.95702],
            [40.74716,-74.073039],
            [33.561822,-88.062285],
            [42.00471,-87.952288],
            [40.77475,-81.36986],
            [37.75121,-121.41549],
            [40.53696,-79.78391],
            [47.781544,-122.394959],
            [40.479262,-74.321207],
            [32.77014,-96.90308],
            [43.07048,-94.28391],
            [44.308051,-71.763968],
            [35.026944,-82.065833],
            [41.74911,-70.96891],
            [41.74911,-70.96891],
            [39.98593,-82.89747]],
            [[42.40564,-71.06813],
            [44.990699,-93.206803],
            [39.47206,-79.057645],
            [39.79179,-104.98988],
            [41.757843,-110.598281],
            [41.012483,-79.717666],
            [33.04954,-96.99246],
            [37.420815,-79.140968],
            [39.47206,-79.057645],
            [37.420815,-79.140968],
            [45.0756,-93.031559],
            [42.909108,-87.918146],
            [33.20586,-92.63103],
            [43.33344,-87.95358],
            [30.260003,-91.071329],
            [43.636001,-70.285254],
            [34.79798,-87.939734],
            [41.520412,-96.079271]],
            [[36.097802,-95.888985],
            [40.874451,-94.560486],
            [41.194054,-87.347867],
            [42.359689,-71.120022],
            [31.625853,-90.0839],
            [28.09458,-81.73189],
            [47.38199,-122.41922],
            [42.535761,-71.158455],
            [44.28891,-88.26729],
            [41.505568,-87.609401],
            [40.104569,-74.788863],
            [35.862537,-83.935433],
            [41.180429,-95.839035],
            [41.180429,-95.839035],
            [32.09786,-81.12113],
            [45.5638,-94.2236],
            [41.48851,-74.21245],
            [29.59486,-98.00111]],
            [[42.55709,-83.03404],
            [29.55811,-98.4245],
            [32.980943,-84.582192],
            [45.44203,-122.47371],
            [35.72409,-88.81766],
            [42.9023,-85.64656],
            [35.72409,-88.81766],
            [35.564904,-82.832927],
            [40.682472,-74.242325],
            [40.682472,-74.242325],
            [38.473192,-81.823154],
            [28.6753,-96.5495],
            [28.6753,-96.5495],
            [36.6512,-76.999045],
            [33.065,-109.34222],
            [41.13442,-89.34019],
            [45.41673,-122.75094],
            [45.04592,-93.05601]],
            [[41.97786,-87.97092],
            [33.35263,-84.56156],
            [29.990148,-93.946735],
            [40.61824,-75.318],
            [39.32584,-76.63257],
            [34.01633,-95.32188],
            [34.136029,-117.350891],
            [41.695224,-83.518834],
            [18.33333,-64.97305],
            [41.52497,-90.48583],
            [33.58858,-85.96869],
            [41.43327,-73.62022],
            [36.829011,-78.65362],
            [41.56427,-81.56114],
            [38.0251,-122.0639],
            [40.815283,-113.20894],
            [36.72787,-90.41583],
            [47.435833,-97.0625],
            [44.551986,-70.540525],
            [33.243803,-86.459093],
            [35.027817,-81.87896]],
            [[28.6753,-96.5495],
            [41.388299,-73.286009],
            [40.772304,-81.427606],
            [41.9496,-72.3034],
            [38.473192,-81.823154],
            [42.467489,-96.40422],
            [33.065,-109.34222],
            [34.223333,-101.755833],
            [39.9747,-86.8301],
            [28.6753,-96.5495],
            [28.6753,-96.5495],
            [28.6753,-96.5495],
            [40.585,-98.318889],
            [33.6799,-93.5951],
            [40.173694,-84.971694],
            [33.2003,-87.607],
            [43.20526,-86.27038],
            [43.20526,-86.27038],
            [29.868333,-93.968333],
            [29.868333,-93.968333]],
            [[36.14189,-77.21939],
            [43.13646,-87.95651],
            [44.872133,-91.93721],
            [30.320903,-91.239015],
            [32.980861,-88.570278],
            [41.126784,-80.68152],
            [30.320903,-91.239015],
            [42.94514,-82.50165],
            [33.63433,-117.6072],
            [40.691957,-75.479887],
            [29.647681,-95.063794],
            [29.83842,-95.38427],
            [31.699139,-89.062417],
            [31.699139,-89.062417],
            [40.502778,-80.099167],
            [37.3693,-80.86341],
            [41.57912,-81.53238],
            [40.02625,-84.22007],
            [33.20586,-92.63103],
            [33.20586,-92.63103]],
            [[44.03173,-73.17318],
            [37.361062,-79.921319],
            [33.20586,-92.63103],
            [35.085843,-90.083385],
            [35.085843,-90.083385],
            [41.451021,-81.685296],
            [41.451021,-81.685296],
            [41.12535,-80.63768],
            [41.12535,-80.63768],
            [43.789569,-91.227025],
            [35.085843,-90.083385],
            [35.085843,-90.083385],
            [33.20586,-92.63103],
            [33.20586,-92.63103],
            [38.233611,-85.7755],
            [39.207304,-77.464762],
            [39.722215,-104.77239],
            [39.3835,-87.69946],
            [41.50398,-84.42831]],
            [[47.370445,-101.838042],
            [40.99428,-80.35105],
            [42.0603,-94.23832],
            [41.74799,-87.93973],
            [37.65895,-97.3949],
            [13.419802,144.690156],
            [32.383597,-98.767345],
            [45.4874,-94.13887],
            [43.664021,-94.492559],
            [41.285456,-110.333645],
            [33.065,-109.34222],
            [45.3052,-95.56731],
            [45.3052,-95.56731],
            [45.3052,-95.56731],
            [39.95874,-75.15515]],
            [[38.473192,-81.823154],
            [44.797479,-95.17197],
            [41.50555,-81.64619],
            [28.6753,-96.5495],
            [28.6753,-96.5495],
            [29.718139,-95.26875],
            [41.386362,-89.466384],
            [41.729167,-108.769722],
            [28.6753,-96.5495],
            [41.253488,-117.167637],
            [41.741635,-89.400418],
            [39.88293,-83.44936],
            [39.5884,-76.99623],
            [44.81588,-91.496624],
            [41.817192,-71.405448]]
        ];
        super(data);
        this.map = map;
    }

    filterForStep(index){

    }

    

    play(){

    }
}

export default MapDataPlayer;