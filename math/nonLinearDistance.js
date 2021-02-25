const trace = label => value =>
  console.log(`${label}: ${value}`);
const apply = ({
  range,
  metric
}) => (x1, x2) => range(x1) && range(x2) && metric(x1, x2);
const metricSpace = (range, metric) => ({
  range,
  metric
});
const coordinates = c => c.every(n => typeof n === 'number');

const distanceMetric = (a, b) => Math.sqrt(
  a.reduce((acc, curr, i) => acc + (curr - b[i]) ** 2, 0)
);

const onanism = metricSpace(coordinates, distanceMetric);

const c1 = [0,0,0,0];
const c2 = [1,1,1,1];

trace('onanism')(`${c1}, ${c2} : ${apply(onanism)(c1, c2)}`);
