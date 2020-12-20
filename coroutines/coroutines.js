function* sayAfter(delay, ...rest) {
	const promise = val => new Promise(res => {
		setTimeout(() => {
			res(val);
		}, delay);
	});

	for (const el of rest)
		yield* promise(el.current.func());
}

const g = sayAfter(1000, 'what');
console.log('started at', Date.now());
g.next().value.then(v => console.log(v));
// g.next().value.then(v => console.log(v));
