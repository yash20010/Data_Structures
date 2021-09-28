// Doubly linked List

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  // Add to the end of the list
  append(value) {
    // if the list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }
  // Add to the beginning of the list
  prepend(value) {
    // if the list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value)
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      this.head.next = oldHead
      oldHead.prev = this.head
    }
  }

  deleteHead() {
    //   If the list is empty
    if (!this.head) {
      return null
    } else {
      let removeHead = this.head
      //   if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removeHead.value
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null
    } else {
      let removedTail = this.tail
      //   if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      return removedTail.value
    }
  }

  search(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.next = next || null
    this.prev = prev || null
  }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)

console.log(list)
