// Stack follows the last in first out (LIFO)

class Stack {
  constructor(...items) {
    this.reverse = false
    this.stack = [...items]
  }

  push(...items) {
    return this.reverse
      ? this.stack.unshift(...items)
      : this.stack.push(...items)
  }

  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop()
  }
}

// "Should push items to top of stack"
const stack = new Stack(4, 5, 6)
stack.push(1, 2, 3)
console.log(stack.stack)
// "Should pop item from top of stack"
console.log(stack.pop())

// "Should push items to bottom of stack"
const stack2 = new Stack(4, 5, 6)
stack2.reverse = true
stack2.push(1, 2, 3)
console.log(stack2.stack)
// "Should pop item from bottom of stack"
console.log(stack2.pop())
