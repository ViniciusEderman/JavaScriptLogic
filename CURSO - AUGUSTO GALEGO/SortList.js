var sortList = function (head) {
  let current = head;

  while (current) {
    let nextCurrent = current.next;

    while (nextCurrent) {
      if (current.val > nextCurrent.val) {
        let temp = current.val;
        current.val = nextCurrent.val;
        nextCurrent.val = temp;
      }
      nextCurrent = nextCurrent.next;
    }

    current = current.next;
  }

  return head;
};

var sortList_BESTSOLUTION = function (head) {
  // não há o head ou o proximo no
  if (!head || !head.next) {
    return head;
  }

  let slow = head
  let fast = head.next;

  // deslocamento dos ponteiros até encontrar o mid
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow.next;

  // quebra da lista em 2 head e mid
  slow.next = null;

  const left = sortList_BESTSOLUTION(head);
  const right = sortList_BESTSOLUTION(mid);

  return merge(left, right);
};

function merge(left, right) {
  // criação do nó falso que vai ajustar na manipulação
  const dummy = new ListNode(0);
  let current = dummy;

  while (left && right) {
    if(left.val < right.val) {
        current.next = left;
        left = left.next;
    }
    else {
        current.next = right;
        right = right.next;
    }

    current = current.next;
  }

  current.next = left || right;

  return dummy.next;
}
