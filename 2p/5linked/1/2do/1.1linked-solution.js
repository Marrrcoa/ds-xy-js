import Linked from '../../5es/linked5es.js'
function Node(data) {//constructor
  this.data = data
  this.next = null
}
let n1 = new Node('A')
let n2 = new Node('B')

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node('C'))
l.prepend(new Node('D'))
l.traverse(l.getHead())


console.log(l.contains('A'))
console.log(l.contains('B'))


console.log(l.getTail())