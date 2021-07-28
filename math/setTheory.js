const inc = set => set ? [set, [set]] : [set];

const ten = (() => {
  let res = 0;
  for (let i = 0; i < 11; i++) {
    res = inc(res);
  }
  return res
})();

console.log(ten)