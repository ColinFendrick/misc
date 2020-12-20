const bases = {
	VIEWLOG: 2,
	VIEWSERVER: 3,
	MANAGESERVER: 5,
	MANAGEROLES: 7,
	MANAGECHANNELS: 11,
	KICKMEMBERS: 13,
	BANMEMBERS: 17,
	CREATEINSTANTINVITE: 19,
	CHANGENICKNAME: 23,
	MANAGENICKNAMES: 27,
	MANAGEEMOJIS: 29,
	MANAGEWEBHOOKS: 31,
	VIEWCHANNELS: 37,
	ADMIN: 41
};

const primeFac = n => {
	const factors = [];
	let divisor = 2;

	while (n >= 2)
		if (n % divisor === 0) {
			factors.push(divisor);
			n = n / divisor;
		} else divisor++;


	return factors;
};

const mapPrimes = primes => primes.map(p => Object.keys(bases).find(key => bases[key] === p));

((...fns) => x => fns.reduce((v, f) => f(v), x))(primeFac, mapPrimes, console.log)(bases.VIEWLOG * bases.CHANGENICKNAME);
