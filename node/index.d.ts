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
 * @param f - The univariate function to be integrated
 * @param interval - The integration interval
 * @param order - Can be 2, 4, 8, or 16. Higher values give
 * more accurate results but is slower - defaults to 16.
 */
declare function gaussQuadrature(f: (x: number) => number, interval: number[], order?: 2 | 4 | 8 | 16): number;
export default gaussQuadrature;
