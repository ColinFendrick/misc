function* anIterable() {
  yield* [1, 2];
  yield "Buckle my shoe";
  yield 3;
  // yield* 4; // this will throw since a number is not iterable
  yield 4;
  yield* "HI"; // strings are iterable
}

const iter = anIterable();
for (let i = 0; i < 7; i++) console.log(iter.next());
