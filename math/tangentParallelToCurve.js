const mathjs = require('mathjs');

const tangentMetric = ([r1, r2]) => curve => {
	const [start, finish] = [
		[r1, mathjs.evaluate(curve, { x: r1 })],
		[r2, mathjs.evaluate(curve, { x: r2 })]
	];

	const chordSlope = (finish[1] - start[1]) / (finish[0] - start[0]);
	const derivative = mathjs.string(mathjs.derivative((curve), ('x')));

	return mathjs.evaluate(derivative, { x: 2 });


	if (derivative.value)
		return derivative.value;

	else return (derivative);

	const point = mathjs.evaluate(derivative, { x });

	return point;
};

console.log(tangentMetric([2, 6])('3x^2 + 1'));
