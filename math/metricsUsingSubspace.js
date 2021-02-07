const typecheck = type => x => typeof x === type;
const numcheck = typecheck('number');

const createWithSubspace = ([domain, range], metric) => ([domainSpace, rangeSpace]) => ({
	domain: domain(domainSpace),
	range: range(rangeSpace),
	metric: metric([domainSpace, rangeSpace])
});

const applyToSubspace = ({ domain, range, metric }) => (...vals) =>
	vals.filter(x => numcheck(x) && domain(x)).map(val => ([val, metric(val)]))
		.filter(([, y]) => range(y));

const realClosedSubset = ([r1, r2]) => x => (r1 <= x) && (x <= r2);
const logarithmicMetric = () => x => x ? Math.log(x) : x;

const logarithmicSpace = createWithSubspace([realClosedSubset, realClosedSubset], logarithmicMetric);

const ourSubspace = [[0, 200], [0, 5]];

const ourSubset = applyToSubspace(logarithmicSpace(ourSubspace))(
	-10, 500, 100000, // outside of subdomain
	1, 10, 100, 140, // These are good
	150, 175, // outside of range
	true, 'string', null // incorrect types
);

console.log(ourSubset);
