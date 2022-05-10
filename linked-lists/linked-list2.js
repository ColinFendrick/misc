function Node(value, prev) {
  this.value = value;
  this.prev = prev;
  this.next = null;
}

function List() {
  this.root = null;

  this.getLastNode = function () {
    let cursor = this.root;

    while (cursor && cursor.next) cursor = cursor.next;

    return cursor;
  };

  this.add = function (value) {
    const lastNode = this.getLastNode();
    const newNode = new Node(value, lastNode);

    if (!lastNode) this.root = newNode;
    else lastNode.next = newNode;

    return newNode;
  };

  this.map = function (fn) {
    const res = new List();

    let cursor = this.root;
    while (cursor) {
      res.add(fn(cursor.value));
      cursor = cursor.next;
    }

    return res;
  };

  this.filter = function (fn) {
    const res = new List();

    for (let node of this) if (fn(node)) res.add(node);

    return res;
  };

  this.reduce = function (fn, acc) {
    for (let i of this) acc = fn(acc, i);

    return acc;
  };

  this[Symbol.iterator] = function () {
    let current = this.root;
    let res;

    return {
      next: function () {
        if (current) {
          res = {
            value: current.value,
            done: false,
          };
          current = current.next;
        } else
          res = {
            done: true,
          };
        return res;
      },
    };
  };
}

const list = new List();
list.add(1);
list.add(2);
list.add(3);

console.log(list.getLastNode());
console.log(
  list.map((i) => i * 2).getLastNode() // Node with value 6
);
console.log(
  list.filter((i) => i >= 2).getLastNode() // NOde with value 3
);
console.log(
  // Just the number 6
  list.reduce((acc, i) => {
    acc += i;
    return acc;
  }, 0)
);

const mapArrToList = (list) => (arr) => arr.forEach((el) => list.add(el));

const arrList = new List();
mapArrToList(arrList)([1, 4, 9, 16, 25]);
console.log(arrList.getLastNode());
