bases = {
	'VIEWLOG': 2,
	'VIEWSERVER': 3,
	'MANAGESERVER': 5,
	'MANAGEROLES': 7,
	'MANAGECHANNELS': 11,
	'KICKMEMBERS': 13,
	'BANMEMBERS': 17,
	'CREATEINSTANTINVITE': 19,
	'CHANGENICKNAME': 23,
	'MANAGENICKNAMES': 27,
	'MANAGEEMOJIS': 29,
	'MANAGEWEBHOOKS': 31,
	'VIEWCHANNELS': 37,
	'ADMIN': 41
}

class pipe:
	def __init__(self, value, func=None):
		self.value = value
		self.func = func
	def __getitem__(self, func):
		return pipe(self.value, func)        
	def __call__(self, *args, **kwargs):
		return pipe(self.func(self.value, *args, **kwargs))
	def __repr__(self):
		return 'pipe(%s, %s)' % (self.value, self.func)


def prime_fac(n): 
	res = []
	divisor = 2

	while n >= 2:
		if n % divisor == 0:
			res.append(divisor)
			n = n/divisor
		else:
			divisor += 1

	return res

def map_primes(primes):
	res = []
	tupl = bases.items()

	for p in primes:
		for k, v in tupl:
			if p == v:
				res.append(k)
	
	return res

def uniques(arr):
	return list(set(arr))

roles = bases['VIEWLOG'] * bases['VIEWLOG'] * bases['CHANGENICKNAME'] * bases['CHANGENICKNAME'] * bases['MANAGEWEBHOOKS'] * bases['ADMIN']

# print(map_primes(uniques(prime_fac(roles))))
print(
	pipe(roles)[prime_fac]()[uniques]()[map_primes]().value
)
