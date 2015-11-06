'use strict';
var fs = require('fs'),
  Strings = require('./strings'),
  _ = require('lodash');

class FileLocalizationProvider {
  constructor(baseDir,locale){
    this.baseDir = baseDir;
    this.locale = locale;
  }

  setLocale(locale){
    this.locale = locale;
  }

  getLocale(){
    return this.locale;
  }

  setBaseDir(dir){
    this.baseDir = dir;
  }

  getBaseDir(){
    return this.baseDir;
  }

  get(key,datum){
    var basePath = this.baseDir + '/' + this.locale + '/',
      parts = key.split('.'),lastPart = null,data = null;
    while((lastPart = parts.shift())){
      if (fs.existsSync(basePath+lastPart)) {
        basePath += lastPart + '/';
      } else if (fs.existsSync(basePath+lastPart+'.json')) {
        basePath += lastPart +'.json';
        break;
      } else {
        throw new Error ('key path provided is invalid');
      }
    }
    data = _.result(require(basePath),parts.join('.'));
    if (datum){
      return Strings.format(data,datum);
    }else{
      return data;
    }
  }


}

module.exports = FileLocalizationProvider;
