/** 
 *
 * your solution here
 *
 */
var pasosT = []
var tiempoT = []
function queue() {
  this.data = []
  this.empasosTy = empasosTy
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.show = show
  this.peek = peek
}
function enqueue(element) {
  this.data.push(element)
}

function dequeue() {
  if (this.empasosTy()) {
    console.log("Fila Vacia")
  }
  else {
    return this.data.shift()
  }
}

function empasosTy() {
  if (this.data.length === 0)
    return true
  else
    return false
}

function show() {
  let show = ""
  for (let i = 0; i < this.data.length; ++i) {
    show += this.data[i] + "\n"
  }
  return show
}

function peek() {
  return this.data[0]
}

function sortqueue(x) {
  for (let k = 1; k <= 5; k++) {
    let pasos = 0;
    var start = Date.now()
    let f = new queue(x);
    let q = new queue(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.enqueue(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.empasosTy() != true) {
        q.enqueue(f.dequeue())
        pasos++
      }
      while (r > q.peek()) {
        f.enqueue(q.dequeue())
        pasos++
      }
      if (q.empasosTy()) {
        f.enqueue(r)
        pasos++
      }
      if (r <= q.peek()) {
        f.enqueue(r)
        pasos++
      }
      while (q.empasosTy() != true) {
        f.enqueue(q.dequeue())
      }
      i++
    }
    pasosT[k - 1] = pasos;
    console.log(f.show())
    console.log("pasos: " + pasos)
    var end = Date.now()
    tiempoT[k - 1] = end - start
    console.log("tiemp: " + tiempoT[k - 1] + "ms")
    pasos = 0
  }
}
sortqueue(10)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 10 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")

sortqueue(100)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 100 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")

sortqueue(1000)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 1000 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos  es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")