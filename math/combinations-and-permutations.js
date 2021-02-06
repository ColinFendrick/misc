const f = n => n < 0 ? -1
	: n === 0 ? 1
		: n * f(n - 1);

export const c_nr = (n, r) => f(n) / (f(n - r) * f(r));
export const p_nr = (n, r) => f(n) / f(n - r);
export const p_rep = (n, r) => n ** r;
export const subsets = n => 2 ** n;
