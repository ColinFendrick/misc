// Generates an application of a metric over a space
const create = (range, metric) => (space) => ({
  range: range(space),
  metric: metric(space),
});

// Applies a metric from create() to a given set of values
const apply =
  ({ range, metric }) =>
  (...vals) =>
    vals.filter((val) => range(val)).map((val) => ({ x: val, y: metric(val) }));

// Our range and metric, which take spaces and a value
const realClosedSubset =
  ([r1, r2]) =>
  (x) =>
    typeof x === "number" && r1 <= x && x <= r2;
const binaryReduceMetric =
  ([r1, r2]) =>
  (x) =>
    x - Math.abs(r2 - r1) / 2 > 0 ? 1 : 0;

// Create the space
const binarySpace = create(realClosedSubset, binaryReduceMetric);
// Apply that space to a specific subset to create our subspace
const subspace = binarySpace([0, 100]);
// Map random values from anywhere into our subspae
const binaryChoice = apply(subspace)(false, "string", 1000, 0, 1, 100);

console.log(binaryChoice);
