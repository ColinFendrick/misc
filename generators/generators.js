function* generatorMath(i) {
  console.log(`before a yield: ${i}`);
  const j = 5 * (yield i * 10);
  console.log(`after first yield: ${j}`);
  const k = yield (2 * j) / 4;
  console.log(`after second yield: ${k}`);
  return i, j, k;
}

const generateMath = generatorMath(10);
// before a yield: 10
console.log(generateMath.next(20)); // { value: 100, done: false }
// after first yield: 50 <-- 10 is inserted via next call and takes place of previous value i
console.log(generateMath.next(10)); // { value: 2 * 50 / 4 = 25, done: false }
// after second yield: 5 <-- 10 is inserted via next call and takes the place of the previous val j
console.log(generateMath.next(5)); // { value: 5, done: true }
