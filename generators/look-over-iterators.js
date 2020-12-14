function* child() {
	yield 1;
	yield 2;
	return 'Lo a child has been born';
}

function* parent() {
	const c = yield* child();
	console.log(c);
	yield 'And he looked like Mickey Rourke';
}

const p = parent();

for (let i of p)
	console.log(i);
