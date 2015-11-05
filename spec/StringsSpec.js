'use strict';
var Strings = require('../src/strings');
describe('Test',function(){

  it('Should replace text an array',function(){
    var t = Strings.format('this is just a {$1} a {$2}',['Test','A long test']);
    expect(t).toEqual('this is just a Test a A long test');
  });

  it('Should replace text with an object',function(){
    var t = Strings.format('this is just a {test} a {test2}',{'test':'Test','test2':'A long test'});
    expect(t).toEqual('this is just a Test a A long test');
  });

  it('Should check if text is a string', function(){
    expect(Strings.isString('aasdfasdf')).toEqual(true);
  });

  it('Should check if an object is a string',function(){
    expect(Strings.isString({name:'Suhail'})).toEqual(false);
  });

  it('Should check if an array is a string', function(){
    expect(Strings.isString([1,2,3,4])).toEqual(false);
  });

});
