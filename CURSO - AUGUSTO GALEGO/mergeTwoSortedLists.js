var mergeTwoLists = function (list1, list2) {
  let currentFirstList = list1;
  let currentSecondList = list2;

  let aux = [];

  while (currentFirstList) {
    aux.push(currentFirstList.val);
    currentFirstList = currentFirstList.next;
  }

  while (currentSecondList) {
    aux.push(currentSecondList.val);
    currentSecondList = currentSecondList.next;
  }

  if (aux.length === 0) {
    // se nenhuma das 2 listas tinha algum no, ele retorna null
    return null;
  }

  aux.sort((a, b) => a - b);

  let newHead = new ListNode(aux[0]);
  let current = newHead;

  for (let i = 1; i < aux.length; i++) {
    current.next = new ListNode(aux[i]);
    current = current.next;
  }

  return newHead;
};
