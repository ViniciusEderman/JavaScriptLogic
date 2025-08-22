class My_Node {
  value: number;
  next: My_Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: My_Node | null;

  constructor() {
    this.head = null;
  }

  append(value: number): void {
    const newNode = new My_Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  print(): void {
    let current = this.head;
    let output = "";

    while (current !== null) {
      output += current.value + " -> ";
      current = current.next;
    }

    output += "null";
    console.log(output);
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();  // Saída: 10 -> 20 -> 30 -> null