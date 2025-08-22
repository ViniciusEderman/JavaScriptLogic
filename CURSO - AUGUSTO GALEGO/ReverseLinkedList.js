var reverseList = function (head) {
  let nodesToInverter = [];

  while (head) {
    nodesToInverter.push(head.val);
    head = head.next;
  }

  if (nodesToInverter.length === 0) {
    return null;
  }

  // invertemos o array, agora precisamos recriar uma lista
  nodesToInverter.reverse();

  let newHead = new ListNode(nodesToInverter[0]);
  let current = newHead;

  for (let i = 1; i < nodesToInverter.length; i++) {
    current.next = new ListNode(nodesToInverter[i]);
    current = current.next;
  }

  return newHead;
};
