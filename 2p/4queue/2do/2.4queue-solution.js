/** 
 *
 * your solution here
 *
 */

function Queue() {
  this.dataStore = []
  this.top = 5


  this.enqueue = function(element) {
    if (this.full())
      console.log("Is full")
    else
      this.dataStore.push(element)
  }

  this.dequeue = function() {
    if (this.empty())
      console.log("Is empty")
    else
      return this.dataStore.shift()
  }

  this.front = function() {
    return this.dataStore[0]
  }

  this.back = function() {
    return this.dataStore[this.dataStore.length - 1]
  }

  this.toString = function() {
    let retStr = ""
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }

  this.empty = function() {
    if (this.dataStore.length == 0)
      return true
    else
      return false

  }

  this.full = function() {
    if (this.dataStore.length == this.top)
      return true
    else
      return false

  }
}

//test
let q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
q.enqueue("Sofia")
q.enqueue("Kihara")

console.log(q.toString())
q.enqueue("Darcy")

//empty
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.toString())
q.dequeue()