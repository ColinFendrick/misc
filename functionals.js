export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const lift = f => (...x) => () => f(...x);
export const destructure = (...properties) => x => properties.reduce((y, prop) => ({ ...y, [prop]: x[prop] }), {});
export const flatten = (...properties) => x => properties.reduce((y, prop) => ({ ...y, ...x[prop] }), {});
/*
	const sum3 = curry((a, b, c) => a + b + c);
	sum3(1, 2, 3)); // 6
	sum3(1, 2)(3)); // 6
	sum3(1)(2, 3); // 6
	sum3(1)(2)(3); // 6
	curry(
		(a, b, c) => a + b + c, [1, 2, 3]
	)() // 6
*/
export const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);

/*
  get('a.b.c')({ a: { b: { c: 'foo' }}}) // 'foo'
*/
export const get = (property, fallback) => obj => property.split('.').reduce((o, p) => o?.[p], obj) || fallback;
/*
  const ob = { a: { b: { c: 'foo' }}};
  set('a.b.c', 'bar')(ob);
  get('a.b.c')(ob) // 'bar';
  set('a.b.x', { y: 'z' });
  get('a.b.x')(ob) // { y: 'z' };
*/
export const set = (property, newValue) => obj => {
  const pList = property.split('.');
  const key = pList.pop();
  const pointer = pList.reduce((acc, curr) => {
    if (acc[curr] === undefined) acc[curr] = {};
    return acc[curr];
  }, obj);
  pointer[key] = newValue;
  return obj;
};


/* these are all true
  (isEmtpy(null))
  (isEmtpy(0))
  (isEmtpy({})
  (isEmtpy(new Set())
  (isEmtpy(Object.create(null))
  (isEmtpy(''))
  (isEmtpy(() => {}))
  (isEmtpy(() => [])
*/
export const isEmpty = value => {
  const type = typeof value;
  if ((value !== null && type === 'object') || type === 'function') {
    const properties = Object.keys(value);
    if (properties.length === 0 || properties.size === 0)
      return true;
  }
  return !value;
};

/* ORDER MATTERS
  const x = { a: { b: { c: { d: 'foo' }}}};
  const y = { a: { b: { c: { d: 'bar', e: 'else' }}}};
  const z = { y: 'y', a: { b: 'foo' }};
  mergeDeep(z, y, x) // { a: { b: { c: { d: 'bar', e: 'else' }}}}
  mergeDeep(x, y, z) // { a: { b: { 'foo' }}, y: 'y' }
*/
export const mergeDeep = (...objects) => {
  const isObject = obj => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal))
        prev[key] = pVal.concat(...oVal);

      else if (isObject(pVal) && isObject(oVal))
        prev[key] = mergeDeep(pVal, oVal);

      else
        prev[key] = oVal;

    });

    return prev;
  }, {});
};

/*
  const add = (a, b, c) => a + b + c;
  const add11 = partiallyApply(add, 5, 6);
  const add2 = partiallyApply(add, 2);
  add11(13) // 24
  add2(3, 4) // 9
*/
const partiallyApply = (fn, ...args) => function (...remainingArgs) {
  return fn.apply(this, args.concat(remainingArgs));
};

const functionals = {
  compose,
  pipe,
  lift,
  destructure,
  flatten,
  get,
  set,
  curry,
  isEmpty,
  mergeDeep,
  partiallyApply
};

export default functionals;
