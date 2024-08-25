// 1
console.log(1)
let frutas = ["manzana", "banana", "pera"]
frutas.push("naranja")
console.log(frutas)
frutas.pop()
console.log(frutas)

// 2
console.log(2)
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matriz[1][1])

// 3
console.log(3)
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

// 4
console.log(4)
function elevarAlCuadrado(array) {
    return array.map(num => num * num)
}
let numeros = [1, 2, 3, 4]
let cuadrados = elevarAlCuadrado(numeros)
console.log(cuadrados)

// 5
console.log(5)
function filtrarMayoresDe(array, valor) {
    return array.filter(num => num > valor)
}
let mayores = filtrarMayoresDe(numeros, 2)
console.log(mayores)

// 6
console.log(6)
function sumarElementos(array) {
    return array.reduce((acumulador, num) => acumulador + num, 0)
}
let suma = sumarElementos(numeros)
console.log(suma)

// 7
console.log(7)
let numeros2 = [5, 8, 12, 3]

let hayMayorQue10 = numeros2.some(num => num > 10)
console.log(hayMayorQue10)

// 8
console.log(8)
let todosPositivos = numeros.every(num => num > 0)
console.log(todosPositivos)

// 9
console.log(9)
let personas = [
  { nombre: "Ana", edad: 28 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Carlos", edad: 40 }
]

let personaMayorDe30 = personas.find(persona => persona.edad > 30)
console.log(personaMayorDe30)
  
// 10
console.log(10)
let palabras = ["banana", "manzana", "kiwi", "pera"]

palabras.sort()
console.log(palabras)
