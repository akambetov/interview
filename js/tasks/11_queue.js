// ### Очередь с О(1) сложностью операций

// Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма `О(1)` .

// // Hash table
// class Queue {
//   #storage = {};
//   #last = 0;
//   #first = 0;

//   enqueue(item) {
//     // todo: добавить элемент в конец очереди
//     this.#storage[this.#last] = item;
//     this.#last++;
//   }

//   dequeue() {
//     // todo: удалить первый элемент из очереди
//     if (this.size === 0) return;

//     const value = this.#storage[this.#first];

//     delete this.#storage[this.#first];
//     this.#first++;

//     return value;
//   }

//   print() {
//     console.log(this.#storage);
//   }

//   get size() {
//     // todo: возвращает размер списка
//     // нельзя использовать геттер
//     return this.#last - this.#first;
//   }
// }

// const hashTable = new Queue();
// hashTable.enqueue('1');
// hashTable.enqueue('2');
// hashTable.enqueue('3');
// hashTable.enqueue('4');

// hashTable.print();
// console.log(hashTable.size);

// hashTable.dequeue();
// hashTable.print();
// console.log(hashTable.size);

// -----------------------------------------
// LinkedList
class LinkedList {
  #length = 0;
  #head;
  #tail;

  addToTail(value) {
    const node = {
      value,
      next: null,
    };

    if (!this.#head) {
      this.#head = node;
    }

    if (this.#tail) {
      this.#tail.next = node;
    }

    this.#tail = node;
    this.#length++;
  }

  removeFromHead() {
    if (this.#length === 0) return;

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;

    return value;
  }

  size() {
    return this.#length;
  }

  toArray() {
    const output = [];
    let current = this.#head;

    while (current) {
      output.push(current);
      current = current.next;
    }

    return output;
  }
}

class Queue extends LinkedList {
  constructor() {
    super();

    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }

  get size() {
    // todo: возвращает размер списка
    // нельзя использовать геттер
    return super.size();
  }

  print() {
    super.print();
  }
}

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
queue.enqueue('4');

console.log(queue.toArray());
console.log(queue.size);

queue.dequeue();
console.log(queue.toArray());
console.log(queue.size);
