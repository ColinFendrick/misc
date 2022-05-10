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
  ADMIN: 41,
};

const primeFac = (n) => {
  const factors = [];
  let divisor = 2;

  while (n >= 2)
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else divisor++;

  return factors;
};

const mapPrimes = (primes) =>
  primes.map((p) => Object.keys(bases).find((key) => bases[key] === p));
const filter = (arr) => arr.filter((val, i, self) => self.indexOf(val) === i);
const roles =
  bases.VIEWLOG *
  bases.VIEWLOG *
  bases.CHANGENICKNAME *
  bases.CHANGENICKNAME *
  bases.MANAGEWEBHOOKS *
  bases.ADMIN;

const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

(
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)
)(
  primeFac,
  mapPrimes,
  filter,
  console.log
)(roles);
