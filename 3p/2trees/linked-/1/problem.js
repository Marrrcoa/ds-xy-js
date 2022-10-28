function Node(o) {
  this.d = o//bject<->data
  this.l = null//eft
  this.r = null//ight
}
function preorder(n) {
  if (n !== null) {
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('/')
let n1 = new Node(2)
let n2 = new Node(7)

p.l = o1
p.r = o2
o2.r = n2
o2.l = n1

preorder(p)