const typecheck = type => x => typeof x === type;
const numcheck = typecheck('number');

const createWithRange = (range, metric) => space => ({
	range: range(space),
	metric: metric(space)
});

const applyToRange = ({ range, metric }) => (...vals) =>
	vals.filter(x => numcheck(x)).map(val => ([val, metric(val)]))
		.filter(([, y]) => range(y));


const realClosedSubset = ([r1, r2]) => y => (r1 <= y) && (y <= r2);

const parabolicMetric = () => x => x ** 2;

const parabolicSpace = createWithRange(realClosedSubset, parabolicMetric);

const ourSubset = applyToRange(parabolicSpace([10, 100]))(6, 8, 14, 'string', true, null);

console.log(ourSubset);
