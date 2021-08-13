const assert = require('chai').assert
const app = require('../queue')

describe('Queues', function () {
  it('should enqueue items to the left', function () {
    const queue = new app(4, 5)
    assert.equal(queue.enqueue(1, 2, 3), 5)
    assert.deepEqual(queue.queue, [1, 2, 3, 4, 5])
  })

  it('Should enqueue items to the right', () => {
    const queue = new app(4, 5)
    queue.reverse = true
    assert.equal(queue.enqueue(1, 2, 3), 5)
    assert.deepEqual(queue.queue, [4, 5, 1, 2, 3])
  })

  it('Should dequeue item from the right', () => {
    const queue = new app(1, 2, 3)
    assert.equal(queue.dequeue(), 3)
  })

  it('Should dequeue item from the left', () => {
    const queue = new app(1, 2, 3)
    queue.reverse = true
    assert.equal(queue.dequeue(), 1)
  })
})
