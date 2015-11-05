'use strict';

class Strings {
  static format(text,data){
    return text.replace(/\{(.*?)\}/g,function(e,v,k){
      return (data && data.constructor === Object)?data[v]:(data && data.constructor === Array)?data.shift():v;
    });
  }

  static isString(text){
    return (text && text.constructor === String && typeof text === "string");
  }

}

module.exports = Strings;
