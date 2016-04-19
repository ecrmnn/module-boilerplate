'use strict';

const chai = require('chai');
const expect = require('chai').expect;

describe('Module Boilerplate Test Suite', function () {
//  let result;
//
//  before(function (done) {
//    execa.shell('node ./src/index.js --flag').then(response => {
//      result = response.stdout;
//      done();
//    }).catch(error => {
//      console.log(error);
//      done();
//    });
//  });

  it('should be awesome', function () {
    const awesome = 'awesome';
    expect(awesome).to.equal('awesome');
  });
});