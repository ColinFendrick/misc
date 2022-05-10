const inc = (set) => (set ? [set, [set]] : [set]);

const create = (n) => {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = inc(res);
  }
  return res;
};

for (let i = 0; i < 5; i++) {
  console.log(create(i));
}
