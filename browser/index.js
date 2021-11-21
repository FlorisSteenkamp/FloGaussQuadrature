var FloGaussQuadrature;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gaussQuadrature": () => (/* binding */ gaussQuadrature)
/* harmony export */ });
// TODO A future improvement can be to use the Gauss–Kronrod rules
// to estimate the error and thus choose a number of constants based
// on the error.
// TODO In future, the constants can be calculated and cached so we can
// choose any value for the order.
/**
 * Numerically integrates the given function using the Gaussian Quadrature
 * method.
 *
 * See https://en.wikipedia.org/wiki/Gaussian_quadrature
 * See http://pomax.github.io/bezierinfo/#arclength
 * @param f The univariate function to be integrated
 * @param interval The integration interval
 * @param order Can be 2, 4, 8, or 16. Higher values give more accurate results
 * but is slower - defaults to 16.
 */
function gaussQuadrature(f, interval, order = 16) {
    if (interval[0] === interval[1]) {
        return 0;
    }
    let { weights, abscissas } = GAUSS_CONSTANTS[order];
    let [a, b] = interval;
    let result = 0;
    let m1 = (b - a) / 2;
    let m2 = (b + a) / 2;
    for (let i = 0; i <= order - 1; i++) {
        result += weights[i] * f(m1 * abscissas[i] + m2);
    }
    return m1 * result;
}
// The Gaussian Legendre Quadrature method constants. 
const GAUSS_CONSTANTS = {
    2: {
        weights: [1, 1],
        abscissas: [-0.5773502691896257, 0.5773502691896257]
    },
    4: {
        weights: [
            0.6521451548625461, 0.6521451548625461,
            0.3478548451374538, 0.3478548451374538
        ],
        abscissas: [
            -0.3399810435848563, 0.3399810435848563,
            -0.8611363115940526, 0.8611363115940526
        ]
    },
    8: {
        weights: [
            0.3626837833783620, 0.3626837833783620,
            0.3137066458778873, 0.3137066458778873,
            0.2223810344533745, 0.2223810344533745,
            0.1012285362903763, 0.1012285362903763
        ],
        abscissas: [
            -0.1834346424956498, 0.1834346424956498,
            -0.5255324099163290, 0.5255324099163290,
            -0.7966664774136267, 0.7966664774136267,
            -0.9602898564975363, 0.9602898564975363
        ]
    },
    // Taken from http://keisan.casio.com/exec/system/1330940731
    16: {
        weights: [
            0.0271524594117540948518,
            0.062253523938647892863,
            0.0951585116824927848099,
            0.1246289712555338720525,
            0.1495959888165767320815,
            0.169156519395002538189,
            0.182603415044923588867,
            0.189450610455068496285,
            0.1894506104550684962854,
            0.182603415044923588867,
            0.1691565193950025381893,
            0.149595988816576732081,
            0.124628971255533872053,
            0.095158511682492784809,
            0.062253523938647892863,
            0.027152459411754094852
        ],
        abscissas: [
            -0.989400934991649932596,
            -0.944575023073232576078,
            -0.86563120238783174388,
            -0.7554044083550030338951,
            -0.6178762444026437484467,
            -0.4580167776572273863424,
            -0.28160355077925891323,
            -0.0950125098376374401853,
            0.0950125098376374401853,
            0.28160355077925891323,
            0.4580167776572273863424,
            0.617876244402643748447,
            0.755404408355003033895,
            0.8656312023878317438805,
            0.944575023073232576078,
            0.989400934991649932596
        ],
    },
    64: {
        weights: [
            0.048690957009139724,
            0.048690957009139724,
            0.04857546744150343,
            0.04857546744150343,
            0.048344762234802954,
            0.048344762234802954,
            0.04799938859645831,
            0.04799938859645831,
            0.04754016571483031,
            0.04754016571483031,
            0.04696818281621002,
            0.04696818281621002,
            0.046284796581314416,
            0.046284796581314416,
            0.04549162792741814,
            0.04549162792741814,
            0.044590558163756566,
            0.044590558163756566,
            0.04358372452932345,
            0.04358372452932345,
            0.04247351512365359,
            0.04247351512365359,
            0.04126256324262353,
            0.04126256324262353,
            0.03995374113272034,
            0.03995374113272034,
            0.038550153178615626,
            0.038550153178615626,
            0.03705512854024005,
            0.03705512854024005,
            0.035472213256882386,
            0.035472213256882386,
            0.033805161837141606,
            0.033805161837141606,
            0.03205792835485155,
            0.03205792835485155,
            0.030234657072402478,
            0.030234657072402478,
            0.028339672614259483,
            0.028339672614259483,
            0.02637746971505466,
            0.02637746971505466,
            0.024352702568710874,
            0.024352702568710874,
            0.022270173808383253,
            0.022270173808383253,
            0.02013482315353021,
            0.02013482315353021,
            0.017951715775697343,
            0.017951715775697343,
            0.015726030476024718,
            0.015726030476024718,
            0.013463047896718643,
            0.013463047896718643,
            0.011168139460131128,
            0.011168139460131128,
            0.008846759826363947,
            0.008846759826363947,
            0.006504457968978363,
            0.006504457968978363,
            0.004147033260562468,
            0.004147033260562468,
            0.001783280721696433,
            0.001783280721696433
        ],
        abscissas: [
            -0.024350292663424433,
            0.024350292663424433,
            -0.07299312178779904,
            0.07299312178779904,
            -0.12146281929612056,
            0.12146281929612056,
            -0.16964442042399283,
            0.16964442042399283,
            -0.21742364374000708,
            0.21742364374000708,
            -0.2646871622087674,
            0.2646871622087674,
            -0.31132287199021097,
            0.31132287199021097,
            -0.3572201583376681,
            0.3572201583376681,
            -0.4022701579639916,
            0.4022701579639916,
            -0.4463660172534641,
            0.4463660172534641,
            -0.48940314570705296,
            0.48940314570705296,
            -0.5312794640198946,
            0.5312794640198946,
            -0.571895646202634,
            0.571895646202634,
            -0.6111553551723933,
            0.6111553551723933,
            -0.6489654712546573,
            0.6489654712546573,
            -0.6852363130542333,
            0.6852363130542333,
            -0.7198818501716109,
            0.7198818501716109,
            -0.7528199072605319,
            0.7528199072605319,
            -0.7839723589433414,
            0.7839723589433414,
            -0.8132653151227975,
            0.8132653151227975,
            -0.8406292962525803,
            0.8406292962525803,
            -0.8659993981540928,
            0.8659993981540928,
            -0.8893154459951141,
            0.8893154459951141,
            -0.9105221370785028,
            0.9105221370785028,
            -0.9295691721319396,
            0.9295691721319396,
            -0.9464113748584028,
            0.9464113748584028,
            -0.9610087996520538,
            0.9610087996520538,
            -0.973326827789911,
            0.973326827789911,
            -0.983336253884626,
            0.983336253884626,
            -0.9910133714767443,
            0.9910133714767443,
            -0.9963401167719553,
            0.9963401167719553,
            -0.9993050417357722,
            0.9993050417357722
        ]
    }
};


FloGaussQuadrature = __webpack_exports__;
/******/ })()
;