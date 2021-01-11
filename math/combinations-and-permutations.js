const f = n => n < 0 ? -1
	: n === 0 ? 1
		: n * f(n - 1);

const c_nr = (n, r) => f(n) / (f(n - r) * f(r));
const p_nr = (n, r) => f(n) / f(n - r);
const p_rep = (n, r) => n ** r;
const subsets = n => 2 ** n;
