(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FloGaussQuadrature = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

// TODO A future improvement can be to use the Gauss–Kronrod rules
// to estimate the error and thus choose a number of constants based
// on the error.
// TODO In future, the constants can be calculated and cached so we can
// chooce any value for the order.


/** 
 * <p>
 * Integrates the given function using the Gaussian Quadrature method.
 * </p>
 * <p> 
 * See https://en.wikipedia.org/wiki/Gaussian_quadrature
 * </p>
 * <p>
 * See http://pomax.github.io/bezierinfo/#arclength
 * </p>
 * 
 * @param {function} f - The univariate function to be integrated
 * @param {number[]} interval - The integration interval
 * @param {number} order - Can be 2, 4, 8, or 16. Higher values give 
 * more accurate results but is slower - defaults to 16.
 */

var _slicedToArray = function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i["return"]) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError("Invalid attempt to destructure non-iterable instance");
		}
	};
}();

function gaussQuadrature(f, interval, order) {
	order = order === undefined ? 16 : order;
	if (interval[0] === interval[1]) {
		return 0;
	}

	var _GAUSS_CONSTANTS$orde = GAUSS_CONSTANTS[order],
	    weights = _GAUSS_CONSTANTS$orde.weights,
	    abscissas = _GAUSS_CONSTANTS$orde.abscissas;

	var _interval = _slicedToArray(interval, 2),
	    a = _interval[0],
	    b = _interval[1];

	var result = 0;
	var m1 = (b - a) / 2;
	var m2 = (b + a) / 2;
	for (var i = 0; i <= order - 1; i++) {
		result += weights[i] * f(m1 * abscissas[i] + m2);
	}

	return m1 * result;
}

// The Gaussian Legendre Quadrature method constants. 
var GAUSS_CONSTANTS = {
	2: {
		weights: [1, 1],
		abscissas: [-0.5773502691896257, 0.5773502691896257]
	},
	4: {
		weights: [0.6521451548625461, 0.6521451548625461, 0.3478548451374538, 0.3478548451374538],
		abscissas: [-0.3399810435848563, 0.3399810435848563, -0.8611363115940526, 0.8611363115940526]
	},
	8: {
		weights: [0.3626837833783620, 0.3626837833783620, 0.3137066458778873, 0.3137066458778873, 0.2223810344533745, 0.2223810344533745, 0.1012285362903763, 0.1012285362903763],
		abscissas: [-0.1834346424956498, 0.1834346424956498, -0.5255324099163290, 0.5255324099163290, -0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363]
	},
	// Taken from http://keisan.casio.com/exec/system/1330940731
	16: {
		abscissas: [-0.989400934991649932596, -0.944575023073232576078, -0.86563120238783174388, -0.7554044083550030338951, -0.6178762444026437484467, -0.4580167776572273863424, -0.28160355077925891323, -0.0950125098376374401853, 0.0950125098376374401853, 0.28160355077925891323, 0.4580167776572273863424, 0.617876244402643748447, 0.755404408355003033895, 0.8656312023878317438805, 0.944575023073232576078, 0.989400934991649932596],
		weights: [0.0271524594117540948518, 0.062253523938647892863, 0.0951585116824927848099, 0.1246289712555338720525, 0.1495959888165767320815, 0.169156519395002538189, 0.182603415044923588867, 0.189450610455068496285, 0.1894506104550684962854, 0.182603415044923588867, 0.1691565193950025381893, 0.149595988816576732081, 0.124628971255533872053, 0.095158511682492784809, 0.062253523938647892863, 0.027152459411754094852]
	}
};

module.exports = gaussQuadrature;

},{}]},{},[1])(1)
});