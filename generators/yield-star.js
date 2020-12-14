function* genNoReturn() {
	yield 2;
	yield 3;
	yield 4;
}

function* genReturn() {
	yield 6;
	yield 7;
	return 'returning end of generator';
}

function* g2() {
	yield 1;
	yield* genNoReturn(); // being a new generator in an old generator
	yield 5;
	const endText = yield* genReturn(); // the evaluation of the whole function is equivalent to return value
	console.log(endText);
}

const gen = g2();
console.log(gen.next());
console.log(gen.next()); // start g1
console.log(gen.next());
console.log(gen.next()); // end g1
console.log(gen.next());
console.log(gen.next()); // begin g2
console.log(gen.next());
console.log(gen.next());
