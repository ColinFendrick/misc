const Node = require("./Node");

const N = Node(1);
N.left = Node(2);
N.left.left = Node(4);
N.left.right = Node(5);
N.right = Node(3);
N.right.left = Node(6);
N.right.right = Node(7);

const invertTree = (node) => {
  if (!node) return;

  const right = invertTree(node.right);
  const left = invertTree(node.left);
  node.left = right;
  node.right = left;
  return node;
};

const getValue = (node) => node.value;

const getValues = (tree) => {
  const depth = [];
  const depthFirst = (node) => {
    if (node) {
      depth.push(getValue(node));
      node.left && depthFirst(node.left);
      node.right && depthFirst(node.right);
    }
  };
  depthFirst(tree);

  const breadth = [];
  const breadthFirst = (node) => {
    const bf = (queue) => {
      const newQueue = [];
      queue.forEach((node) => {
        breadth.push(getValue(node));
        node.left && newQueue.push(node.left);
        node.right && newQueue.push(node.right);
      });
      newQueue.length && bf(newQueue);
    };

    bf([node]);
  };

  breadthFirst(tree);

  return { depth, breadth };
};

console.log(getValues(N), getValues(invertTree(N)));
