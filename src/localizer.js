'use strict';
import Strings from './strings';
class Localizer {

  constructor(locale,source){
    this.locale = locale;
    this.source = source;
  }

  getLocale(){
    return this.locale;
  }

  setLocale(loc){
    this.locale = loc;
  }

  setSource(src){
    this.source = src;
  }

  getSource(){
    return this.source;
  }

  format(key,data){
    return Strings.format(this.source[key],data);
  }

}

module.exports = Localizer;
