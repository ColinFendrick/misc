const typecheck = (type) => (vals) =>
  !vals.map((v) => typeof v === type).includes(false);
const numcheck = typecheck("number");

const createWithSubspace =
  ([domain, range], metric) =>
  ([domainSpace, rangeSpace]) => ({
    domain: domain(domainSpace),
    range: range(rangeSpace),
    metric: metric([domainSpace, rangeSpace]),
  });

const applyToSubspace =
  ({ domain, range, metric }) =>
  (...vals) =>
    vals
      .filter((x) => numcheck(x) && x.map(domain))
      .map((val) => [val, metric(val)])
      .filter(([, y]) => range(y));

const realClosedSubset =
  ([r1, r2]) =>
  (x) =>
    r1 <= x && x <= r2;
const logarithmicMetric =
  () =>
  ([x1, x2]) =>
    x1 && x2 ? Math.log(x1) * Math.log(x2) : 0;

const logarithmicSpace = createWithSubspace(
  [realClosedSubset, realClosedSubset],
  logarithmicMetric
);

const ourSubspace = [
  [
    [0, 200],
    [0, 100],
  ],
  [0, 5],
];

const ourSubset = applyToSubspace(logarithmicSpace(ourSubspace))(
  [2, 2],
  [2, 4]
);

const ourFourspace = [
  [
    [0, 200],
    [0, 200],
    [0, 2000],
  ],
  [0, 10000],
];

const ourFourspaceSubset = applyToSubspace(logarithmicSpace(ourFourspace))(
  [2, 2, 2],
  [201, 2, 2]
);

console.log(ourSubset, ourFourspaceSubset);
