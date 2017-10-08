'use strict'

var mocha;
var chai;
var helper;
var GaussQuadrature;

if (typeof require === 'undefined') {
	// Browser
} else {
	// Node
	mocha    = require('mocha');
	chai     = require('chai');
	helper   = require('./helpers/helper.js');
	GaussQuadrature = require('../../gauss-quadrature.js');
}

var { assert, expect } = chai;
var { } = GaussQuadrature;

describe('', function() {
	it('should ', 
	function() {

	});
});