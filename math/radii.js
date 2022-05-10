const circleArea = (r) => Math.PI * r ** 2;
const compareArea = (r1, r2) =>
  r2 > r1
    ? [r2 / r1, circleArea(r2) / circleArea(r1)]
    : [r1 / r2, circleArea(r1) / circleArea(r2)];

console.log(compareArea(9, 10));
