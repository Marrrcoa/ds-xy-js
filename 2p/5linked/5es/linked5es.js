
//
// imports ES5
// Node5es (data)
//

export default function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head
  let search = "";
  while (c) {//exists
    if (v == c.data) {
      search = c.data
    }
    c = c.next
  }
  if (search == v)
    console.log(search)
  else
    console.log("no encontrado")

}
function getTail() {
  let c = this.head
  var tail = ""
  while (c) {
    tail = c.data
    c = c.next
  }
  console.log(tail)
}
//Metodos nuevos
function InsertAfter(n, v) {
  let c = this.head
  let acomodo;
  while (c) {//exists
    if (v == c.data) {
      acomodo = c.next
      c.next = n
      n.next = acomodo
    }
    c = c.next
  }
}
function InsertBefore(n, v) {
  let c = this.head
  let anterior, acomodo
  if (c.next == null) {
    this.prepend(n)
  } else {
    if (v != this.head.data) {
      while (c) {//exists
        if (v != c.data) {
          anterior = c
        } else {
          acomodo = anterior.next
          anterior.next = n
          n.next = acomodo
        }
        c = c.next
      }
    } else {
      this.prepend(n)
    }
  }
}