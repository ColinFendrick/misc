const trace = label => value =>
	console.log(`${label}: ${value}`);


const apply = ({ range, metric }) => (x1, x2) => range(x1) && range(x2) && metric(x1, x2);
const metricSpace = (range, metric) => ({ range, metric });

const realNumbers = n => typeof n === 'number';
const integers = n => Number.isInteger(n);
const coordinates = c => c.every(n => integers(n));
const polarCoordinates = ([r, theta]) => realNumbers(r) && (-Math.PI <= theta) && (theta <= Math.PI);

const realMetric = (x1, x2) => Math.abs(x2 - x1);
const cartesianMetric = ([x1, y1], [x2, y2]) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
const bunchedIntegerMetric = (x1, x2) => x1 % 2 !== 0 || x2 % 2 !== 0 ?
	(Math.abs(x2 - x1) / 2) + 1 :
	(Math.abs(x2 - x1) / 2);
const taxicabMetric = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);
const polarMetric = ([r1, t1], [r2, t2]) => Math.sqrt((r2 ** 2) + (r1 ** 2) - (2 * r1 * r2 * Math.cos(t2 - t1)));

const real = metricSpace(realNumbers, realMetric);
const natural = metricSpace(integers, realMetric);
const evenCountingNatural = metricSpace(integers, bunchedIntegerMetric);
const cartesian = metricSpace(coordinates, cartesianMetric);
const lpSpace = metricSpace(coordinates, taxicabMetric);
const polarSpace = metricSpace(polarCoordinates, polarMetric);


trace('real')(apply(real)(7, 4));
trace('natural')(apply(natural)(1, 2));
trace('bunched natural')(apply(evenCountingNatural)(7, 1));
trace('cartesian')(apply(cartesian)([1, 4], [0, 0]));
trace('lp space')(apply(lpSpace)([1, 4], [0, 0]));
trace('polar space')(apply(polarSpace)([1, 0], [1, Math.PI / 2]));
