const mathjs = require("mathjs");

// Generates an application of a metric over a space
const create = (domain, metric) => (space) => ({
  domain: domain(space),
  metric: metric(space),
});

const realClosedSubset =
  ([r1, r2]) =>
  (x) =>
    typeof x === "number" && r1 <= x && x <= r2;
const cdfNormal =
  ([r1, r2]) =>
  (x) => {
    const mean = (r2 - r1) / 2;
    const stdDeviation = Math.sqrt(
      Math.abs(Math.abs(r2 - mean) ** 2 - Math.abs(r1 - mean) ** 2) / 2
    );

    return (1 - mathjs.erf((mean - x) / (Math.sqrt(2) * stdDeviation))) / 2;
  };

const studentTSpace = create(realClosedSubset, cdfNormal);

const apply =
  ({ domain, metric } = studentTSpace([1, 100])) =>
  (...vals) =>
    vals.filter((val) => domain(val)).map((val) => [val, metric(val)]);

const myScores = apply(studentTSpace([1, 100]))(99);

console.log(myScores);
