'use strict';

const { describe, it } = require('mocha');
const { expect } = require('chai');
const dist = require('../dist');

describe('Module Boilerplate Test Suite', () => {
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

  it('should be unicorn', () => {
    expect(dist()).to.equal('🦄');
  });
});
