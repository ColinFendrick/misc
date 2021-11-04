const callAfter = delay => (fn, ...args) => {
  setTimeout(() => {
    fn(...args);
  }, delay);
};

let completed = false;
let i = 0;

(() => {
  const setCompleted = () => completed = true;

  do {
    callAfter(100)(setCompleted);
    i++;
    console.log(i);
  } while (!completed);
})()