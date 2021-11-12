// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example
//  refers to
//  refers to

// The new list is

// Function Description

// Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:

// SinglyLinkedListNode pointer headA: a reference to the head of a list
// SinglyLinkedListNode pointer headB: a reference to the head of a list
// Returns

// SinglyLinkedListNode pointer: a reference to the head of the merged list
// Input Format

// The first line contains an integer , the number of test cases.

// The format for each test case is as follows:

// The first line contains an integer , the length of the first linked list.
// The next  lines contain an integer each, the elements of the linked list.
// The next line contains an integer , the length of the second linked list.
// The next  lines contain an integer each, the elements of the second linked list.

// Constraints

// , where  is the  element of the list.
// Sample Input

// 1
// 3
// 1
// 2
// 3
// 2
// 3
// 4
// Sample Output

// 1 2 3 3 4
// Explanation

// The first linked list is:

// The second linked list is:

// Hence, the merged linked list is:

function mergeLists(head1, head2) {
  let newList = new SinglyLinkedListNode(null)
  let current = newList
  while (head1 && head2) {
    if (head1.data < head2.data) {
      current.next = new SinglyLinkedListNode(head1.data)
      head1 = head1.next
    } else {
      current.next = new SinglyLinkedListNode(head2.data)
      head2 = head2.next
    }
    current = current.next
  }
  if (!head1) {
    current.next = head2
  }
  if (!head2) {
    current.next = head1
  }
  return newList.next
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData
    this.next = null
  }
}

const list1 = new SinglyLinkedListNode(1)
list1.next = new SinglyLinkedListNode(3)
list1.next.next = new SinglyLinkedListNode(7)

const list2 = new SinglyLinkedListNode(1)
list2.next = new SinglyLinkedListNode(2)

console.log(mergeLists(list1, list2))
