'use strict';
var FileLocSource = require('../lib/filelocalizationprovider');
describe('FileLocalizationProvider',function(){

  var FS;

  beforeEach(function(){
    console.log(FileLocSource);
    FS = new FileLocSource(__dirname+'/i18n','en');
  });

  it('Should get data object in file',function(){
    var t = FS.get('tst.base.bare.def');
    expect(t).toEqual('Cool');
  });

  it('Should get data object in sub folder',function(){
    var t = FS.get('back.done.base.name.first');
    expect(t).toEqual('Suhail');
  });

});
