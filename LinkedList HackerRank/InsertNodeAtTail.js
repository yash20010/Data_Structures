class SinglyLinkedList {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
}

// function insetNodeAtTail(head, data) {
//   let tailNode = new SinglyLinkedList(data)
//   let currentNode = head
//   while (currentNode.next) {
//     currentNode = currentNode.next
//   }
//   currentNode.next = tailNode
//   return head
// }

function insertNodeAtTail(head, data) {
  if (!head) {
    return new SinglyLinkedListNode(data)
  }
  let currentNode = head
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = new SinglyLinkedListNode(data)
  return head
}

function printLinkedList(head) {
  let currentNode = head
  while (currentNode) {
    console.log(`${currentNode.data} -> `)
    currentNode = currentNode.next
  }
  console.log('null')
}

const head = new SinglyLinkedList(
  1,
  new SinglyLinkedList(2, new SinglyLinkedList(3))
)

printLinkedList(head)
printLinkedList(insetNodeAtTail(head, 4))
