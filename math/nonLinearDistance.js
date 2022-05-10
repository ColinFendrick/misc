const apply =
  ({ range, metric }) =>
  (x1, x2) =>
    range(x1) && range(x2) && metric(x1, x2);
const metricSpace = (range, metric) => ({
  range,
  metric,
});
const coordinates = (c) => c.every((n) => typeof n === "number");

const distanceMetric = (a, b) =>
  Math.sqrt(a.reduce((acc, curr, i) => acc + (curr - b[i]) ** 2, 0));

const onanism = metricSpace(coordinates, distanceMetric);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const origin = [0, 0, 0, 0];
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

const q1 = () =>
  readline.question(
    "did you masturbate today? Please answer yes or no. \n",
    (ans) => {
      ans = ans.toLowerCase();
      if (ans === "no") {
        console.log("Good for you.");
        readline.close();
      } else if (ans === "yes") {
        console.log("Bad boy");
        c1 = 1;
        readline.close();
      } else {
        console.log("Your answer is incorrectly formatted, please try again.");
        q1();
      }
    }
  );
q1();

const terminus = [c1, c2, c3, c4];

console.log(apply(onanism)(origin, terminus));

// trace('onanism')(`${origin}, ${terminus} : ${apply(onanism)(origin, terminus)}`);
