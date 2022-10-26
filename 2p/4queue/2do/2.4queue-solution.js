/** 
 *
 * your solution here
 *
 */
class Stack {
  constructor() {
    this.data = []
    this.top = 5
  }


  push(o) {//validate stack not full
     if (this.isFull())
     console.log('full stack')
    else{
    this.data.push(o)
     console.log(o,'added')
    }
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  pop(element) {//validate stack not empty
    if (this.isEmpty())
      console.log('empty stack')
    else
      this.data.pop(element)
  }
  pop2(element) {//validate stack not empty
    if (this.isEmpty())
      console.log('empty stack')
    else
      console.log(this.data.shift(element), 'popped')
  }

  isEmpty() {
    if (this.data.length === 0)//this.size()
      return true
    else
      return false
  }

  isFull() {
    if (this.data.length === this.top)
      return true
    else
      return false
  }

  size() {
    return this.data.length
  }
  makeEmpty() {
    this.data = []
  }
}
