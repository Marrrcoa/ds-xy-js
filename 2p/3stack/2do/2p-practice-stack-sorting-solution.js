/** 
 *
 * your solution here
 *
 */
//Practica de Pilas.
class Stack {
  constructor(x) {
    this.data = []
    this.top = x
  }



  push(o) {//validate stack not full
    // if (this.isFull())
    //     console.log('full stack')
    // else{
    this.data.push(o)
    // console.log(o,'added')
    //}
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

  search(k) { }
  traverse() { }

  toString() { }
  makeEmpty() {
    this.data = []
  }


  Llenar(x) {
    let s = new Stack
    let n
    for (let i = 1; i <= x; i++) {
      n = (Math.floor(Math.random() * x) + 1)
      this.push(n)
    }
  }

  sort(x) {
    let Res = new Stack()
    let aux = new Stack()
    let k = 0
    for (let i = 0; i <= x; i++) {

      while (this.peek() <= Res.peek() || Res.isEmpty()) {
        Res.push(this.data.pop())
        k++
        while (!aux.isEmpty()) {
          Res.push(aux.data.pop())
          k++
        }
      }

      while (this.peek() > Res.peek()) {
        aux.push(Res.data.pop())
        k++
      }




    }
    console.log(Res)
    console.log("I toook " + k + " steps")

  }


}
var s = new Stack(1e1)
console.log("NUMBER 1e1")
for (let i = 1; i <= 5; i++) {
  console.time("T")
  console.log("Corrida No. " + i + "\n")
  s.Llenar(1e1)
  s.sort(1e1)
  console.timeEnd("T")
}
console.log("")
console.log(" NUMBER 1e2 ")

var s2 = new Stack(1e2)
for (let i = 1; i <= 5; i++) {
  console.time("T")
  console.log("Corrida No. " + i + "\n")
  s.Llenar(1e2)
  s.sort(1e2)
  console.timeEnd("T")
}
console.log("")
console.log("NUMBER 1e3")

var s3 = new Stack(1e3)
for (let i = 1; i <= 5; i++) {
  console.time("T")
  console.log("Corrida No. " + i + "\n")
  s.Llenar(1e3)
  s.sort(1e3)
  console.timeEnd("T")
}