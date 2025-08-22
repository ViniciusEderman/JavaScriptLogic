var middleNode = function (head) {
  let steps = 0;
  let current = head;

  while (head) {
    steps++;
    current = current.next;
  }

  let mid = Math.floor(steps / 2);
  current = head;

  for (let i = 0; i < mid; i++) {
    current = current.next;
  }

  return current;
};

// forma mais inteligente de se resolver:
var middleNode2 = function (head) {
  let ahead = head;

  while (ahead && ahead.next) {
    ahead = ahead.next.next;
    head = ahead.next;
  }

  return head;
};
